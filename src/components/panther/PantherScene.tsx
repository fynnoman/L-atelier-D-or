"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function ContextMonitor({ onLost }: { onLost: () => void }) {
  const gl = useThree(state => state.gl);
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", onLost);
    // R3F deliberately releases its context on unmount. That is not a GPU failure.
    return () => canvas.removeEventListener("webglcontextlost", onLost);
  }, [gl, onLost]);
  return null;
}

function Sculpture({ still, onReady }: { still: boolean; onReady: () => void }) {
  const { scene } = useGLTF("/panther/panther.glb");
  const model = useMemo(() => scene.clone(true), [scene]);
  const root = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const rig = useRef<{ head?: THREE.Object3D; tail?: THREE.Object3D; eyes: (THREE.Object3D | undefined)[] }>({ eyes: [] });

  useEffect(() => {
    rig.current = { head: model.getObjectByName("Head"), tail: model.getObjectByName("Tail"), eyes: [model.getObjectByName("EyeLeft"), model.getObjectByName("EyeRight")] };
    onReady();
  }, [model, onReady]);

  useFrame(({ pointer }, delta) => {
    if (still || !root.current) return;
    const { head, tail, eyes } = rig.current;
    elapsed.current += Math.min(delta, 0.05);
    const t = elapsed.current;
    // Tiny breathing and an occasional glance; no orbiting or endless walking loop.
    root.current.scale.y = 1 + Math.sin(t * 1.1) * 0.006;
    const glance = Math.sin(t * 0.23) * 0.09;
    if (head) {
      head.rotation.y = THREE.MathUtils.damp(head.rotation.y, 0.78 + glance + pointer.x * 0.07, 1.4, delta);
      head.rotation.x = THREE.MathUtils.damp(head.rotation.x, Math.sin(t * 0.37) * 0.025 - pointer.y * 0.025, 1.2, delta);
    }
    if (tail) tail.rotation.x = Math.sin(t * 0.48) * 0.065;
    const blinkPhase = t % 8.7;
    const blink = blinkPhase > 8.36 ? 1 - Math.sin((blinkPhase - 8.36) / 0.34 * Math.PI) * 0.94 : 1;
    eyes.forEach(eye => { if (eye) eye.scale.y = blink; });
  });

  return <group ref={root} position={[0.22, -0.63, 0]} rotation={[0, -0.26, 0]} dispose={null}>
    <primitive object={model} />
  </group>;
}

export default function PantherScene({ still, onReady, onLost }: { still: boolean; onReady: () => void; onLost: () => void }) {
  return <Canvas
    camera={{ position: [0.3, 1.15, 5.8], fov: 32 }}
    dpr={[1, 1.5]}
    frameloop={still ? "demand" : "always"}
    gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    onCreated={({ gl }) => {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 1.25;
    }}
  >
    <ContextMonitor onLost={onLost} />
    <ambientLight intensity={0.35} />
    <directionalLight position={[1, 4, 4]} intensity={2.5} color="#f9eedc" />
    <directionalLight position={[-3, 2, -2]} intensity={3} color="#aec7e6" />
    <Suspense fallback={null}>
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={4} position={[-3, 3, 3]} scale={[2, 5, 1]} target={[0, 0, 0]} color="#fcf3e3" />
        <Lightformer form="rect" intensity={3} position={[1, 4, -2]} scale={[5, 1, 1]} target={[0, 0, 0]} color="#e0eaff" />
        <Lightformer form="rect" intensity={1.5} position={[4, 1, 2]} scale={[1, 3, 1]} target={[0, 0, 0]} color="#bfdcff" />
      </Environment>
      <Sculpture still={still} onReady={onReady} />
    </Suspense>
  </Canvas>;
}
