import * as THREE from 'three'

/**
 * Longitude offset (degrees) to align WGS84 coords with this GLB's equirectangular texture.
 * Tuned for great-globe.glb (Sketchfab).
 */
export const GLOBE_LNG_OFFSET = -90

/** Slightly above unit sphere surface (Object_4 local space). */
export const GLOBE_MARKER_RADIUS = 1.02

/**
 * Lat/lng → point on a Y-up unit sphere (standard equirectangular / glTF mapping).
 * Attach markers to the earth mesh (`Object_4`) so they inherit the same transforms as the texture.
 */
export function latLngToVector3(
  lat: number,
  lng: number,
  radius: number = GLOBE_MARKER_RADIUS,
): THREE.Vector3 {
  const latRad = THREE.MathUtils.degToRad(lat)
  const lonRad = THREE.MathUtils.degToRad(lng + GLOBE_LNG_OFFSET)

  return new THREE.Vector3(
    radius * Math.cos(latRad) * Math.sin(lonRad),
    radius * Math.sin(latRad),
    radius * Math.cos(latRad) * Math.cos(lonRad),
  )
}

/** Name of the earth surface mesh node inside great-globe.glb */
export const GLOBE_EARTH_NODE_NAME = 'Object_4'

const _globeCenter = new THREE.Vector3()
const _toCamera = new THREE.Vector3()

/**
 * Y rotation (radians) for `spinGroup` so the marker at lat/lng faces the camera.
 * Uses the same lat/lng mapping as the red pin (`latLngToVector3`).
 * Accounts for the current camera azimuth (e.g. after OrbitControls drag).
 */
export function spinYToFaceMarker(
  earthAnchor: THREE.Object3D,
  spinGroup: THREE.Object3D,
  lat: number,
  lng: number,
  camera: THREE.Camera,
): number {
  const markerInSpin = latLngToVector3(lat, lng, 1)
  earthAnchor.updateMatrixWorld(true)
  spinGroup.updateMatrixWorld(true)
  earthAnchor.localToWorld(markerInSpin)
  spinGroup.worldToLocal(markerInSpin)

  const markerAngle = Math.atan2(markerInSpin.x, markerInSpin.z)

  spinGroup.getWorldPosition(_globeCenter)
  _toCamera.copy(camera.position).sub(_globeCenter)
  const cameraAngle = Math.atan2(_toCamera.x, _toCamera.z)

  return cameraAngle - markerAngle
}
