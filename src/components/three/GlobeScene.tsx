import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Sphere } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { countries } from '../../data/universities'

function latLonToVec3(lat: number, lon: number, r: number): [number, number, number] {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return [
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ]
}

// ── Globe mesh ──────────────────────────────────────────────────────────
function Globe() {
  const ref = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.18
  })

  const navigate = useNavigate()
  const RADIUS = 2

  return (
    <group ref={ref}>
      {/* Core sphere */}
      <Sphere args={[RADIUS, 64, 64]}>
        <meshStandardMaterial
          color="#0a1628"
          roughness={0.8}
          metalness={0.2}
          emissive="#1565e0"
          emissiveIntensity={0.08}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[RADIUS * 1.04, 32, 32]}>
        <meshStandardMaterial
          color="#1565e0"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          emissive="#2979ff"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Wireframe grid */}
      <Sphere args={[RADIUS * 1.001, 20, 20]}>
        <meshBasicMaterial color="#1565e0" wireframe transparent opacity={0.08} />
      </Sphere>

      {/* Country markers */}
      {countries.map(country => {
        const pos = latLonToVec3(country.lat, country.lon, RADIUS)
        return (
          <group key={country.id} position={pos}>
            {/* Gold dot */}
            <Sphere args={[0.06, 16, 16]}>
              <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1.5} />
            </Sphere>

            {/* Pulsing ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.08, 0.12, 32]} />
              <meshBasicMaterial color="#FFD700" transparent opacity={0.6} side={THREE.DoubleSide} />
            </mesh>

            {/* HTML label */}
            <Html
              center
              distanceFactor={6}
              style={{ pointerEvents: 'auto' }}
            >
              <button
                onClick={() => navigate(`/best-universities#${country.id}`)}
                className="text-xs font-bold text-brand-goldlit bg-brand-dark/80 border border-brand-gold/40 rounded-full px-2 py-0.5 whitespace-nowrap hover:bg-brand-gold/20 transition-all cursor-pointer backdrop-blur-sm"
              >
                {country.flag} {country.name}
              </button>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

// ── Exported scene ──────────────────────────────────────────────────────
export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -4, -4]} intensity={0.6} color="#1565e0" />
      <Globe />
    </Canvas>
  )
}
