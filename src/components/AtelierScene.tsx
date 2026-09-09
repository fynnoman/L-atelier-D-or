"use client";

import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { type MotionValue } from "framer-motion";
import * as THREE from "three";

type Props = {progress: MotionValue<number>; tint: string; reduced: boolean};
function Frame({progress,tint,reduced}:Props) {
  const group=useRef<THREE.Group>(null);
  const left=useRef<THREE.Group>(null);
  const right=useRef<THREE.Group>(null);
  const lensLeft=useRef<THREE.Mesh>(null);
  const lensRight=useRef<THREE.Mesh>(null);
  const bridge=useMemo(()=>new THREE.CatmullRomCurve3([new THREE.Vector3(-.27,.2,0),new THREE.Vector3(0,.29,0),new THREE.Vector3(.27,.2,0)]),[]);
  const temple=useMemo(()=>new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(.07,0,-.55),new THREE.Vector3(.08,-.02,-1.65),new THREE.Vector3(.06,-.22,-2.05)]),[]);
  useFrame((state,delta)=>{
    if(!group.current)return;
    const p=reduced?0:progress.get();
    const explode=THREE.MathUtils.smoothstep(p,.35,.7);
    const intro=reduced?1:Math.min(1,state.clock.elapsedTime/2);
    const ease=1-Math.pow(1-intro,3);
    const damping=1-Math.exp(-delta*5);
    group.current.rotation.y=THREE.MathUtils.lerp(group.current.rotation.y, -.24+(1-ease)*1.8+p*Math.PI*.7+(reduced?0:state.pointer.x*.1),damping);
    group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,.14-p*.32+(reduced?0:state.pointer.y*.07),damping);
    group.current.rotation.z=THREE.MathUtils.lerp(group.current.rotation.z,-.12+p*.22,damping);
    group.current.position.y=reduced?0:Math.sin(state.clock.elapsedTime*.65)*.035;
    group.current.position.x=THREE.MathUtils.lerp(group.current.position.x,p*.65,damping);
    group.current.scale.setScalar(.82+ease*.18);
    if(left.current)left.current.position.x=-1.02-explode*.38;
    if(right.current)right.current.position.x=1.02+explode*.38;
    if(lensLeft.current)lensLeft.current.position.z=explode*.9;
    if(lensRight.current)lensRight.current.position.z=explode*.9;
  });
  return <group ref={group}>
    {[-1,1].map(side=><group key={side} ref={side===-1?left:right} position={[side*1.02,0,0]}>
      <mesh scale={[1,.94,1]}><torusGeometry args={[.81,.027,12,100]} /><meshStandardMaterial color={tint} metalness={1} roughness={.2}/></mesh>
      <mesh ref={side===-1?lensLeft:lensRight} scale={[1,.94,1]}><circleGeometry args={[.785,80]}/><meshPhysicalMaterial color="#d8c3a0" transparent opacity={.18} roughness={.09} metalness={.15} side={THREE.DoubleSide} depthWrite={false}/></mesh>
      <group position={[side*.82,.07,0]} scale={[side,1,1]}><mesh><tubeGeometry args={[temple,48,.026,8,false]}/><meshStandardMaterial color={tint} metalness={1} roughness={.22}/></mesh><mesh position={[.08,-.04,-1.65]} rotation={[Math.PI/2,0,0]}><capsuleGeometry args={[.045,.45,4,12]}/><meshStandardMaterial color="#342a20" roughness={.32}/></mesh></group>
      <mesh position={[-side*.68,-.19,-.08]} scale={[.065,.12,.04]} rotation={[0,0,side*.3]}><sphereGeometry args={[1,16,16]}/><meshPhysicalMaterial color="#ebdfc9" transparent opacity={.7} roughness={.25}/></mesh>
      <mesh position={[side*.83,.07,0]}><boxGeometry args={[.12,.07,.065]}/><meshStandardMaterial color={tint} metalness={1} roughness={.2}/></mesh>
    </group>)}
    <mesh><tubeGeometry args={[bridge,24,.025,10,false]}/><meshStandardMaterial color={tint} metalness={1} roughness={.16}/></mesh>
    <mesh position={[0,.29,.025]}><sphereGeometry args={[.045,16,16]}/><meshStandardMaterial color="#f1e5d0" roughness={.22}/></mesh>
  </group>;
}
class SceneBoundary extends Component<{children:ReactNode;fallback:ReactNode},{failed:boolean}>{
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?this.props.fallback:this.props.children;}
}
export default function AtelierScene(props:Props){
  const [supported]=useState(()=>{if(typeof document === "undefined")return false;const c=document.createElement("canvas");const gl=c.getContext("webgl2");const available=!!gl;gl?.getExtension("WEBGL_lose_context")?.loseContext();return available;});
  const [visible,setVisible]=useState(true);
  const container=useRef<HTMLDivElement>(null);
  useEffect(()=>{const observer=new IntersectionObserver(([e])=>setVisible(e.isIntersecting));if(container.current)observer.observe(container.current);return()=>observer.disconnect();},[]);
  const fallback=<div className="atelier-scene-fallback" style={{position:"relative"}}><Image src="/models/orphee-03.png" alt="Orphée 03 – Produktvisualisierung" fill sizes="75vw" style={{objectFit:"contain",mixBlendMode:"multiply"}} /></div>;
  return <div ref={container} className="atelier-canvas" role="img" aria-label="Dreidimensionale goldene Orphée-Fassung, die sich beim Scrollen dreht und in ihre Bestandteile öffnet"><SceneBoundary fallback={fallback}>{supported?<Canvas style={{touchAction:"pan-y"}} camera={{position:[0,0,7.2],fov:36}} dpr={[1,1.5]} frameloop={visible?"always":"never"} gl={{antialias:true,alpha:true}}><ambientLight intensity={.8}/><directionalLight position={[3,5,4]} intensity={3}/><Frame {...props}/><Environment resolution={128}><Lightformer intensity={4} position={[0,5,0]} scale={[10,2,1]}/><Lightformer intensity={3} position={[-4,1,3]} scale={[3,8,1]}/><Lightformer intensity={2} color="#f3d49c" position={[4,-2,2]} scale={[3,5,1]}/></Environment></Canvas>:fallback}</SceneBoundary></div>;
}
