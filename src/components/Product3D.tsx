"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

type Props = {
  tint?: string; // active color hex — tints the glass lenses
  autoRotate?: boolean;
};

function EyewearFrame({ tint = "#c69a5a" }: { tint?: string }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!g.current) return;
    g.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.35;
    g.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.06;
  });

  const bridgeMetal = tint;

  return (
    <group ref={g}>
      {/* Left lens ring */}
      <mesh position={[-1.05, 0, 0]}>
        <torusGeometry args={[0.9, 0.055, 64, 180]} />
        <meshStandardMaterial color={bridgeMetal} metalness={1} roughness={0.14} envMapIntensity={1.3} />
      </mesh>
      {/* Left lens glass */}
      <mesh position={[-1.05, 0, 0]}>
        <cylinderGeometry args={[0.83, 0.83, 0.03, 96]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.22}
          roughness={0.05}
          ior={1.5}
          chromaticAberration={0.05}
          anisotropy={0.4}
          color={tint}
          attenuationColor={tint}
          attenuationDistance={2.2}
        />
      </mesh>

      {/* Right lens ring */}
      <mesh position={[1.05, 0, 0]}>
        <torusGeometry args={[0.9, 0.055, 64, 180]} />
        <meshStandardMaterial color={bridgeMetal} metalness={1} roughness={0.14} envMapIntensity={1.3} />
      </mesh>
      {/* Right lens glass */}
      <mesh position={[1.05, 0, 0]}>
        <cylinderGeometry args={[0.83, 0.83, 0.03, 96]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.22}
          roughness={0.05}
          ior={1.5}
          chromaticAberration={0.05}
          anisotropy={0.4}
          color={tint}
          attenuationColor={tint}
          attenuationDistance={2.2}
        />
      </mesh>

      {/* Bridge */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[0.38, 0.045, 0.035]} />
        <meshStandardMaterial color={bridgeMetal} metalness={1} roughness={0.2} />
      </mesh>

      {/* Nose pads */}
      {[-0.11, 0.11].map((x) => (
        <mesh key={x} position={[x, -0.14, 0.06]}>
          <sphereGeometry args={[0.045, 24, 24]} />
          <meshStandardMaterial color="#111" roughness={0.6} metalness={0} />
        </mesh>
      ))}

      {/* Temples */}
      {[
        { pos: [-2.0, 0.05, 0] as [number, number, number], rot: [0, 0.1, 0] as [number, number, number] },
        { pos: [2.0, 0.05, 0] as [number, number, number], rot: [0, -0.1, 0] as [number, number, number] },
      ].map((t, i) => (
        <mesh key={i} position={t.pos} rotation={t.rot}>
          <boxGeometry args={[0.95, 0.035, 0.035]} />
          <meshStandardMaterial color={bridgeMetal} metalness={1} roughness={0.22} />
        </mesh>
      ))}
    </group>
  );
}

// Small draggable/auto-rotating 3D frame preview used inside product detail.
// User can drag to rotate. Environment lighting keeps it consistent.
export default function Product3D({ tint = "#c69a5a", autoRotate = true }: Props) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.25} color="#ffffff" />
        <directionalLight position={[-4, -2, 3]} intensity={0.55} color="#f4dbaa" />
        <Suspense fallback={null}>
          <EyewearFrame tint={tint} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={0.6}
          rotateSpeed={0.6}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
}
