import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { surfaceMaps } from "./boutiqueTextures";
import { addBoutiqueDetails } from "./boutiqueDetails";

const ease = (a: number, b: number, t: number) => {
  const x = THREE.MathUtils.clamp((t - a) / (b - a), 0, 1);
  return x * x * x * (x * (x * 6 - 15) + 10);
};

/** A self-contained, locally rendered architectural opening. No remote assets. */
export function createBoutique(host: HTMLElement, update: (phase: string, progress: number) => void, finish: () => void) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.5 : 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#12151a");
  scene.fog = new THREE.FogExp2("#171512", .025);
  const camera = new THREE.PerspectiveCamera(43, 1, .05, 90);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, .04);
  scene.environment = environment.texture;
  scene.environmentIntensity = .55;
  room.dispose();
  pmrem.dispose();
  const materials: THREE.Material[] = [];
  const textures: THREE.Texture[] = [];
  const material = (color: string, roughness: number, metalness = 0) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    materials.push(m); return m;
  };
  const stone = material("#ffffff", .88);
  const dark = material("#192323", .33, .25);
  const gold = material("#ffffff", .35, .82);
  const wood = material("#ffffff", .62);
  const plaster = material("#ad9270", .86);
  const black = material("#151411", .42);
  const marble = material("#ffffff", .31);
  const leather = material("#ffffff", .8);
  for (const [surface, mat, bumpScale] of [
    ["limestone", stone, .045], ["walnut", wood, .018],
    ["marble", marble, .007], ["leather", leather, .015], ["brass", gold, .002],
  ] as const) {
    const maps = surfaceMaps(surface, Math.min(renderer.capabilities.getMaxAnisotropy(), 8));
    mat.map = maps.map; mat.bumpMap = maps.bumpMap;
    mat.roughnessMap = maps.roughnessMap; mat.bumpScale = bumpScale;
    textures.push(...maps.textures);
  }
  const glow = material("#ffe5b0", .3);
  glow.emissive.set("#ffcd83"); glow.emissiveIntensity = 3;
  const glass = new THREE.MeshPhysicalMaterial({ color: "#b0b6a7", metalness: .15, roughness: .09, transmission: .82, thickness: .12, transparent: true, opacity: .45 });
  materials.push(glass);
  function box(parent: THREE.Object3D, x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z); mesh.castShadow = !mat.transparent && mat !== glow; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  function sphere(parent: THREE.Object3D, x: number, y: number, z: number, radius: number, mat: THREE.Material) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 20, 12), mat);
    mesh.position.set(x, y, z); parent.add(mesh); return mesh;
  }
  function point(x: number, y: number, z: number, intensity: number) {
    const light = new THREE.PointLight("#ffd291", intensity, 9, 2);
    light.position.set(x, y, z); scene.add(light);
  }
  function frame(parent: THREE.Object3D, x: number, y: number, z: number, w: number, h: number, mat = gold, rail = .055) {
    box(parent, x-w/2, y, z, rail, h, .09, mat); box(parent, x+w/2, y, z, rail, h, .09, mat);
    box(parent, x, y-h/2, z, w, rail, .09, mat); box(parent, x, y+h/2, z, w, rail, .09, mat);
  }
  function lettering(text: string, y: number, z: number, width: number) {
    const canvas = document.createElement("canvas"); canvas.width = 2048; canvas.height = 256;
    const context = canvas.getContext("2d")!;
    context.clearRect(0, 0, 2048, 256); context.fillStyle = "#e7c887";
    context.font = "96px Georgia"; context.textAlign = "center"; context.textBaseline = "middle";
    context.fillText(text, 1024, 128);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; textures.push(texture);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }); materials.push(mat);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width/8), mat); mesh.position.set(0,y,z); scene.add(mesh);
  }
  // Limestone masonry and a deeply recessed, painted timber storefront.
  box(scene, 0, -.18, 2, 28, .3, 30, stone);
  for (let row = 0; row < 12; row++) for (let col = -6; col <= 6; col++) {
    const x = col*1.52 + (row%2)*.76;
    if (Math.abs(x) < 5.3 && row < 8) continue;
    box(scene, x, row*.62+.31, -.38, 1.5, .60, .65, stone);
  }
  box(scene, 0, 4.6, 0, 10.6, .9, .65, dark);
  box(scene, 0, 5.13, .15, 11, .16, 1, stone);
  box(scene, 0, 4.17, .16, 10.6, .07, .68, gold);
  lettering("L’ATELIER D’OR", 4.61, .34, 6.6);
  for (const x of [-5.1, -1.52, 1.52, 5.1]) {
    box(scene,x,2.05,0,.24,4.2,.65,dark);
    box(scene,x,2.05,.34,.055,3.9,.035,gold);
    box(scene,x,.16,.13,.39,.3,.85,dark);
    box(scene,x,4,.13,.4,.18,.85,dark);
  }
  // The glowing display windows contain real miniature spectacles.
  for (const side of [-1, 1]) {
    const x = side*3.3;
    box(scene,x,.5,-.1,3.3,1,.5,dark);
    box(scene,x,2.5,-1.1,3.25,3.1,.1,plaster);
    frame(scene,x,2.48,.16,3.2,3.25);
    box(scene,x,2.5,.1,3.13,3.1,.04,glass);
    box(scene,x,3.98,-.45,3,.035,.7,glow);
    point(x,3.4,-.4,32);
    for (let i = -1; i <= 1; i++) {
      const px = x+i*.91;
      box(scene,px,1.1,-.45,.57,.2+i*.09,.55,wood);
      const specs = new THREE.Group(); specs.position.set(px,1.4+i*.05,-.35); scene.add(specs);
      for (const eye of [-1,1]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(.12,.011,8,32),gold);
        ring.position.x=eye*.145; ring.scale.y=.78; specs.add(ring);
      }
      box(specs,0,0,0,.06,.015,.02,gold);
    }
    // Wall lanterns: metal housing, warm diffuser and local spill light.
    box(scene,side*1.88,3.05,.46,.08,.55,.12,gold);
    box(scene,side*1.88,3.05,.56,.19,.38,.17,glow);
    frame(scene,side*1.88,3.05,.67,.23,.46,dark,.035);
    point(side*1.88,3.05,.85,13);
  }
  // Entry threshold and two independently hinged doors, opening 105 degrees.
  box(scene,0,.035,.15,3,.07,1.25,black);
  const doors: THREE.Group[] = [];
  for (const side of [-1,1]) {
    const pivot = new THREE.Group(); pivot.position.set(side*1.4,0,.1); scene.add(pivot); doors.push(pivot);
    const center = -side*.7;
    frame(pivot,center,1.98,0,1.3,3.9,dark,.13);
    box(pivot,center,.63,0,1.3,1.2,.12,dark);
    box(pivot,center,2.5,.07,1.14,2.55,.04,glass);
    frame(pivot,center,2.5,.11,1.16,2.58);
    frame(pivot,center,.58,.10,1.12,.77,gold,.025);
    box(pivot,-side*1.23,1.77,.19,.045,.65,.075,gold);
    for (const y of [1.48,2.05]) box(pivot,-side*1.23,y,.13,.045,.035,.2,gold);
  }
  // Salon: walnut panelling, brass inlays, checker marble and pendant lights.
  box(scene,0,2.5,-8.2,11,5,.2,wood);
  box(scene,-5.3,2.5,-4,.2,5,8,plaster); box(scene,5.3,2.5,-4,.2,5,8,plaster);
  box(scene,0,5,-4,11,.15,8,plaster);
  for(let x=-5;x<=5;x++) for(let z=-8;z<=0;z++) {
    const tile = box(scene,x,.008,z,.985,.025,.985,(x+z)%2===0?marble:black);
    tile.rotation.y = ((x*7+z*3)%4)*Math.PI/2;
  }
  for (const z of [-2.2,-5.8]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.9,.028,8,64),gold); ring.rotation.x=Math.PI/2; ring.position.set(0,3.8,z);scene.add(ring);
    for (let i=0;i<10;i++) { const a=i*Math.PI/5;sphere(scene,Math.cos(a)*.9,3.77,z+Math.sin(a)*.9,.085,glow); }
    box(scene,0,4.4,z,.025,1.2,.025,gold); point(0,3.55,z,55);
  }
  for(const side of [-1,1]) {
    box(scene,side*3.6,.7,-4.7,1.35,1.4,3.5,wood);
    box(scene,side*3.6,1.43,-4.7,1.45,.08,3.6,marble);
    frame(scene,side*3.6,1,-2.92,1.15,.58,gold,.025);
  }
  const details = addBoutiqueDetails(scene, {gold,wood,stone,dark,glow,black,leather,marble,glass}, materials);
  point(-3.5, 3.8, -6.9, 42); point(3.5, 3.8, -6.9, 42);
  lettering("L’ATELIER D’OR", 3.05, -8.055, 2.35);
  const key = new THREE.SpotLight("#ffe0ac",150,22,.8,.7,1.5); key.position.set(0,4.4,-3);key.target.position.set(0,0,2);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.bias=-.0003;scene.add(key,key.target);
  const moon = new THREE.DirectionalLight("#b2c2dc",1.5);moon.position.set(-5,9,7);scene.add(moon,new THREE.AmbientLight("#c4b59d",.35));
  // Batch stationary opaque geometry by material. The detailed display walls
  // remain a handful of GPU draw calls; door leaves retain their own pivots.
  scene.updateMatrixWorld(true);
  const originals = new Set<THREE.BufferGeometry>();
  function batch(parent: THREE.Object3D, exclusions: THREE.Object3D[] = []) {
    const inverse = parent.matrixWorld.clone().invert();
    const buckets = new Map<THREE.Material, THREE.Mesh[]>();
    const collect = (object: THREE.Object3D) => {
      if (exclusions.includes(object)) return;
      if (object instanceof THREE.Mesh && !Array.isArray(object.material) && (!object.material.transparent || object.material.userData.batchTransparent) && !details.mirrors.some(mirror => mirror === object)) {
        const bucket = buckets.get(object.material) ?? []; bucket.push(object); buckets.set(object.material, bucket);
      }
      object.children.forEach(collect);
    };
    parent.children.forEach(collect);
    for (const [mat, meshes] of buckets) {
      if (meshes.length < 2) continue;
      const copies = meshes.map(object => {
        // RoundedBoxGeometry is non-indexed; normalize all geometry before merging.
        const copy = object.geometry.index ? object.geometry.toNonIndexed() : object.geometry.clone();
        return copy.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, object.matrixWorld));
      });
      const geometry = mergeGeometries(copies);
      copies.forEach(copy => copy.dispose());
      if (!geometry) continue;
      const combined = new THREE.Mesh(geometry, mat);
      combined.castShadow = meshes.some(object => object.castShadow); combined.receiveShadow = true;
      for (const object of meshes) { originals.add(object.geometry); object.removeFromParent(); }
      parent.add(combined);
    }
  }
  doors.forEach(door => batch(door));
  batch(scene, doors);
  originals.forEach(geometry => geometry.dispose());
  const resize = () => { const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.fov=w<h?54:43;camera.updateProjectionMatrix(); };
  resize();window.addEventListener("resize",resize);
  const lost = (event: Event) => { event.preventDefault();finish(); };renderer.domElement.addEventListener("webglcontextlost",lost);
  let frameId = 0;let elapsed=0;let last=performance.now();let stopped=false;
  const onVisibility = () => { last = performance.now(); };
  document.addEventListener("visibilitychange", onVisibility);
  const draw = (now: number) => {
    if(stopped)return;
    // A hidden tab never consumes the cinematic timeline.
    if(!document.hidden) elapsed+=Math.max((now-last)/1000,0);
    last=now;
    const opening=ease(.3,1.7,elapsed), travel=ease(.95,3.8,elapsed);
    doors[0].rotation.y=-opening*Math.PI*.585;doors[1].rotation.y=opening*Math.PI*.585;
    const portrait=camera.aspect<1;
    camera.position.set(.35*(1-travel)+Math.sin(travel*Math.PI)*.24,2.4-.15*travel,(portrait?13:10.8)*(1-travel)-4.4*travel);
    camera.lookAt(0,2.2,-7);
    renderer.toneMappingExposure=1.12-.15*ease(3.7,4.6,elapsed);
    update(elapsed>3.8?"reveal":"approach",Math.min(elapsed/5.4,1));
    renderer.render(scene,camera);
    if(elapsed>=5.4)finish();
    else frameId=requestAnimationFrame(draw);
  };
  frameId=requestAnimationFrame(draw);
  return () => {
    if(stopped)return;stopped=true;cancelAnimationFrame(frameId);window.removeEventListener("resize",resize);
    renderer.domElement.removeEventListener("webglcontextlost",lost);
    document.removeEventListener("visibilitychange", onVisibility);
    details.dispose();
    const geometries = new Set<THREE.BufferGeometry>();
    scene.traverse(object=>{if(object instanceof THREE.Mesh)geometries.add(object.geometry);});
    geometries.forEach(geometry=>geometry.dispose());
    materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());environment.dispose();renderer.dispose();renderer.domElement.remove();
  };
}
