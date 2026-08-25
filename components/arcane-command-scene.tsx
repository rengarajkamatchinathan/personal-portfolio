"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sparkles, Torus, Icosahedron, Line } from "@react-three/drei"
import { useMemo, useRef, useState } from "react"
import * as THREE from "three"

function Core() {
  const group = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.28
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12
  })
  return (
    <group ref={group}>
      <Icosahedron args={[1.18, 2]}>
        <meshStandardMaterial color="#071e17" emissive="#00b86b" emissiveIntensity={2.8} metalness={0.85} roughness={0.18} wireframe />
      </Icosahedron>
      <Icosahedron args={[0.65, 1]}>
        <meshStandardMaterial color="#b8ffda" emissive="#18ff9a" emissiveIntensity={5} metalness={0.4} roughness={0.08} />
      </Icosahedron>
      <pointLight color="#21ff9b" intensity={10} distance={6} />
    </group>
  )
}

function RelicRings() {
  const group = useRef<THREE.Group>(null)
  const marks = useMemo(() => {
    const points: [number, number, number][] = []
    for (let i = 0; i < 12; i += 1) {
      const a = (i / 12) * Math.PI * 2
      points.push([Math.cos(a) * 2.22, Math.sin(a) * 2.22, 0])
    }
    return points
  }, [])
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z -= delta * 0.12
  })
  return (
    <group ref={group} rotation={[0.55, 0.15, 0]}>
      <Torus args={[1.82, 0.012, 8, 96]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#d6a84f" transparent opacity={0.7} />
      </Torus>
      <Torus args={[2.2, 0.009, 8, 96]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#20e98d" transparent opacity={0.52} />
      </Torus>
      {marks.map((point, index) => (
        <mesh key={index} position={point} rotation={[0, 0, index * 0.52]}>
          <boxGeometry args={[0.16, 0.045, 0.02]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#e3bb67" : "#39ffa3"} />
        </mesh>
      ))}
    </group>
  )
}

function Shards() {
  const shards = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    position: [(Math.sin(i * 2.7) * 3.1), (Math.cos(i * 1.8) * 2.5), (Math.sin(i) * 1.4)] as [number, number, number],
    scale: 0.05 + (i % 4) * 0.025,
  })), [])
  return <>{shards.map((shard, index) => <Float key={index} speed={0.6 + index * 0.04} rotationIntensity={1.2} floatIntensity={0.5}><mesh position={shard.position} scale={shard.scale} rotation={[index, index * 0.7, index * 0.3]}><octahedronGeometry args={[1, 0]} /><meshStandardMaterial color={index % 3 ? "#60766c" : "#d6a84f"} emissive="#0b6e47" emissiveIntensity={0.7} metalness={0.95} roughness={0.2} /></mesh></Float>)}</>
}

function SceneContent({ pointer }: { pointer: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null)
  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.2, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.14, 0.04)
  })
  return <group ref={group}><Core /><RelicRings /><Shards /><Sparkles count={120} scale={7} size={2.2} speed={0.32} color="#45ffad" /></group>
}

export function ArcaneCommandScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  return (
    <div className="absolute inset-0" aria-label="Interactive emerald energy core visualization" role="img" onPointerMove={(event) => setPointer({ x: (event.clientX / window.innerWidth) * 2 - 1, y: (event.clientY / window.innerHeight) * 2 - 1 })}>
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }} fallback={<div className="absolute inset-0 bg-primary/5" />}>
        <color attach="background" args={["#030b08"]} />
        <fog attach="fog" args={["#030b08", 5, 12]} />
        <ambientLight intensity={0.28} color="#b8ffda" />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#d6a84f" />
        <SceneContent pointer={pointer} />
      </Canvas>
    </div>
  )
}
