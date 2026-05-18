import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import { Billboard, Bounds, Center, Html, OrbitControls, useGLTF } from '@react-three/drei'
import type { Group } from 'three'
import * as THREE from 'three'
import { COUNTRIES } from '../../data/constants'
import {
  GLOBE_EARTH_NODE_NAME,
  GLOBE_MARKER_RADIUS,
  latLngToVector3,
  spinYToFaceMarker,
} from '../../utils/globe'

const globeUrl = new URL('../../assets/great-globe.glb', import.meta.url).href

/** Canvas size — the 3D sphere is fitted to fill this (see Bounds below). */
export const GLOBE_SIZE_PX = 400

/** Extra space around the canvas so CountryMarker labels are not clipped. */
export const GLOBE_FRAME_PADDING_PX = 56
export const GLOBE_FRAME_PX = GLOBE_SIZE_PX + GLOBE_FRAME_PADDING_PX * 2

/** Padding so the sphere sits inside the circular frame (not clipped). */
const GLOBE_FIT_MARGIN = 1.2
const AUTO_ROTATE_SPEED = 0.55

useGLTF.preload(globeUrl)

const _lightOffset = new THREE.Vector3()
const _lightTarget = new THREE.Vector3(0, 0, 0)

/**
 * Lights pinned to the camera (top-left), so the highlight stays on one side of the
 * view while the globe spins — it does not travel with the map texture.
 */
function ViewFixedLights() {
  const keyLight = useRef<THREE.DirectionalLight>(null)
  const fillLight = useRef<THREE.DirectionalLight>(null)
  const { camera } = useThree()

  useFrame(() => {
    if (keyLight.current) {
      _lightOffset.set(-5.5, 6.5, 5.5).applyQuaternion(camera.quaternion)
      keyLight.current.position.copy(camera.position).add(_lightOffset)
      keyLight.current.target.position.copy(_lightTarget)
    }

    if (fillLight.current) {
      _lightOffset.set(-7, 1.5, 3.5).applyQuaternion(camera.quaternion)
      fillLight.current.position.copy(camera.position).add(_lightOffset)
      fillLight.current.target.position.copy(_lightTarget)
    }
  })

  return (
    <>
      <ambientLight intensity={0.68} color="#e2f0fa" />
      <hemisphereLight args={['#f4f9fd', '#2d6a94', 0.72]} />
      <directionalLight ref={keyLight} intensity={3.9} color="#ffffff" />
      <directionalLight ref={fillLight} intensity={0.95} color="#c8e4f8" />
    </>
  )
}

const PIN_RADIUS = 0.012
/** Offset along surface normal from pin center to label anchor (pin top + gap). */
const LABEL_LIFT = 0.028
const MARKER_DISTANCE_FACTOR = 0.5

function CountryMarker({
  lat,
  lng,
  name,
}: {
  lat: number
  lng: number
  name: string
}) {
  const { pinPosition, labelPosition } = useMemo(() => {
    const pin = latLngToVector3(lat, lng, GLOBE_MARKER_RADIUS)
    const outward = pin.clone().normalize()
    const label = pin.clone().add(outward.multiplyScalar(PIN_RADIUS * 2 + LABEL_LIFT))
    return { pinPosition: pin, labelPosition: label }
  }, [lat, lng])

  return (
    <group>
      <mesh position={pinPosition} renderOrder={10}>
        <sphereGeometry args={[PIN_RADIUS, 16, 16]} />
        <meshBasicMaterial color="#e11d48" depthTest depthWrite={false} />
      </mesh>
      <Billboard position={labelPosition}>
        <Html
          occlude
          distanceFactor={MARKER_DISTANCE_FACTOR}
          zIndexRange={[50, 0]}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div
            className="flex flex-col items-center whitespace-nowrap"
            style={{ transform: 'translate(-50%, -100%)' }}
          >
            <span className="rounded-full bg-[#01236a] px-2 py-0.5 text-[10px] font-bold leading-tight text-white shadow-md">
              {name}
            </span>
            <div className="h-2 w-px bg-[#01236a]/90" />
          </div>
        </Html>
      </Billboard>
    </group>
  )
}

function GlobeModel({ activeCountryId }: { activeCountryId: string }) {
  const { scene } = useGLTF(globeUrl)
  const { camera } = useThree()
  const spinRef = useRef<Group>(null)
  const [earthAnchor, setEarthAnchor] = useState<THREE.Object3D | null>(null)
  const targetRotationY = useRef(0)
  const rotatingToTarget = useRef(false)
  const active = COUNTRIES.find((c) => c.id === activeCountryId)

  const model = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.frustumCulled = false
        if (mesh.material) {
          const sourceMats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
          const isEarth =
            child.name === GLOBE_EARTH_NODE_NAME ||
            sourceMats.some((m) => m.name === 'matsurface_material')

          // scene.clone() shares materials with the useGLTF cache — clone before mutating
          // so each mount does not stack color.multiplyScalar on the same instance.
          const mats = sourceMats.map((mat) => {
            const m = mat.clone()
            if (m instanceof THREE.MeshStandardMaterial) {
              if (m.map) m.map.colorSpace = THREE.SRGBColorSpace
              m.color.multiplyScalar(1.42)
              if (isEarth) {
                m.emissive.set('#1a4568')
                m.emissiveIntensity = 0.1
                m.roughness = 0.26
                m.metalness = 0.04
              } else {
                m.roughness = Math.min(m.roughness, 0.72)
                m.metalness = Math.min(m.metalness, 0.15)
              }
            }
            m.needsUpdate = true
            return m
          })

          mesh.material = Array.isArray(mesh.material) ? mats : mats[0]
        }
      }
    })
    return clone
  }, [scene])

  useLayoutEffect(() => {
    let anchor: THREE.Object3D | null = null
    model.traverse((child) => {
      if (child.name === GLOBE_EARTH_NODE_NAME) anchor = child
    })
    setEarthAnchor(anchor)
  }, [model])

  useEffect(() => {
    if (!earthAnchor || !spinRef.current) return

    const country = COUNTRIES.find((c) => c.id === activeCountryId)
    if (!country) return

    targetRotationY.current = spinYToFaceMarker(
      earthAnchor,
      spinRef.current,
      country.coordinates.lat,
      country.coordinates.lng,
      camera,
    )
    rotatingToTarget.current = true
  }, [activeCountryId, earthAnchor, camera])

  useFrame((_, delta) => {
    const spin = spinRef.current
    if (!spin) return

    if (rotatingToTarget.current) {
      const diff = targetRotationY.current - spin.rotation.y
      const wrapped = Math.atan2(Math.sin(diff), Math.cos(diff))
      if (Math.abs(wrapped) < 0.02) {
        spin.rotation.y = targetRotationY.current
        rotatingToTarget.current = false
      } else {
        spin.rotation.y += wrapped * Math.min(1, delta * 3)
        return
      }
    }

    spin.rotation.y += AUTO_ROTATE_SPEED * delta
  })

  return (
    <Center>
      <group ref={spinRef}>
        <primitive object={model} />
        {earthAnchor &&
          active &&
          createPortal(
            <CountryMarker
              key={active.id}
              lat={active.coordinates.lat}
              lng={active.coordinates.lng}
              name={active.name}
            />,
            earthAnchor,
          )}
      </group>
    </Center>
  )
}

function GlobeScene({ activeCountryId }: { activeCountryId: string }) {
  return (
    <>
      <ViewFixedLights />
      <Bounds fit margin={GLOBE_FIT_MARGIN}>
        <GlobeModel activeCountryId={activeCountryId} />
      </Bounds>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3.5}
      />
    </>
  )
}

function GlobeFallback({
  framePx,
  canvasPx,
}: {
  framePx: number
  canvasPx: number
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-visible"
      style={{ width: framePx, height: framePx }}
    >
      <div
        className="flex items-center justify-center rounded-full border-2 border-dashed border-navy-200/80 bg-navy-50/50"
        style={{ width: canvasPx, height: canvasPx }}
      >
        <span className="text-sm font-medium text-navy-400">Loading globe…</span>
      </div>
    </div>
  )
}

export type GlobeLayoutDimensions = {
  canvasPx: number
  framePaddingPx: number
}

interface Globe3DProps {
  className?: string
  activeCountryId: string
  layout?: GlobeLayoutDimensions
}

export default function Globe3D({
  className = '',
  activeCountryId,
  layout,
}: Globe3DProps) {
  const canvasPx = layout?.canvasPx ?? GLOBE_SIZE_PX
  const framePaddingPx = layout?.framePaddingPx ?? GLOBE_FRAME_PADDING_PX
  const framePx = canvasPx + framePaddingPx * 2

  return (
    <Suspense fallback={<GlobeFallback framePx={framePx} canvasPx={canvasPx} />}>
      <div
        className={`relative mx-auto flex max-w-full shrink-0 cursor-pointer items-center justify-center overflow-visible ${className}`}
        style={{ width: framePx, height: framePx }}
      >
        <div
          className="relative cursor-pointer overflow-visible"
          style={{ width: canvasPx, height: canvasPx }}
        >
          <Canvas
            className="touch-none !h-full !w-full cursor-pointer"
            camera={{ position: [0, 0, 2.5], fov: 40, near: 0.1, far: 100 }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            dpr={[1, 2]}
            style={{ display: 'block' }}
            onCreated={({ gl }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping
              gl.toneMappingExposure = 1.82
            }}
          >
            <GlobeScene activeCountryId={activeCountryId} />
          </Canvas>
        </div>
      </div>
    </Suspense>
  )
}
