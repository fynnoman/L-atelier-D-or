import * as THREE from "three";
import { Reflector } from "three/addons/objects/Reflector.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

type Palette = Record<"gold" | "wood" | "stone" | "dark" | "glow" | "black" | "leather" | "marble" | "glass", THREE.Material>;

export function addBoutiqueDetails(scene: THREE.Scene, palette: Palette, materials: THREE.Material[]) {
  const mirrors: Reflector[] = [];
  const {gold,wood,glow,leather,marble,glass}=palette;
  const acetate = new THREE.MeshStandardMaterial({color:"#382016",roughness:.22,metalness:.15});
  const champagne = new THREE.MeshStandardMaterial({color:"#ddc999",roughness:.24,metalness:.75});
  const lens = new THREE.MeshPhysicalMaterial({color:"#b5c4bc",roughness:.08,metalness:.05,transparent:true,opacity:.19,depthWrite:false});
  // Disjoint lens surfaces can share a draw call without transparency ordering issues.
  lens.userData.batchTransparent = true;
  const shade = new THREE.MeshStandardMaterial({color:"#f0d4a3",roughness:.82,emissive:"#d89c47",emissiveIntensity:.24,side:THREE.DoubleSide});
  materials.push(acetate,champagne,lens,shade);
  function mesh(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x=0,y=0,z=0) {
    const object=new THREE.Mesh(geometry,material);object.position.set(x,y,z);object.castShadow=!material.transparent && material!==glow;object.receiveShadow=true;parent.add(object);return object;
  }
  function box(parent: THREE.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,mat:THREE.Material) {
    return mesh(parent,new RoundedBoxGeometry(w,h,d,1,Math.min(.014,w*.15,h*.15,d*.15)),mat,x,y,z);
  }
  function tube(parent:THREE.Object3D,points:THREE.Vector3[],radius:number,mat:THREE.Material,closed=false) {
    return mesh(parent,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points,closed),closed?40:12,radius,6,closed),mat);
  }
  // Reuse three eyewear designs including lenses, temples, bridge and nose pads.
  const prototypes = [0,1,2].map(style=>{
    const group=new THREE.Group();
    const mat=style===0?gold:style===1?acetate:champagne;
    for(const side of [-1,1]) {
      const points:THREE.Vector3[]=[];
      const outline=new THREE.Shape();
      for(let i=0;i<40;i++) {
        const a=i*Math.PI*2/40;
        const c=Math.cos(a),s=Math.sin(a);
        const x=side*.143+Math.sign(c)*Math.pow(Math.abs(c),style===1?.65:1)*.119;
        const y=Math.sign(s)*Math.pow(Math.abs(s),style===1?.65:1)*.089+(style===2?side*c*.016:0);
        points.push(new THREE.Vector3(x,y,0));
        if(i===0)outline.moveTo(x,y);else outline.lineTo(x,y);
      }
      outline.closePath();
      tube(group,points,style===1?.015:.007,mat,true);
      mesh(group,new THREE.ShapeGeometry(outline),lens,0,0,-.008);
      tube(group,[new THREE.Vector3(side*.257,0,0),new THREE.Vector3(side*.268,.006,-.1),new THREE.Vector3(side*.25,-.02,-.28),new THREE.Vector3(side*.24,-.07,-.33)],.006,mat);
      mesh(group,new THREE.SphereGeometry(.012,8,6),champagne,side*.041,-.036,-.03);
      box(group,side*.259,0,-.015,.018,.025,.018,gold);
    }
    tube(group,[new THREE.Vector3(-.027,.01,0),new THREE.Vector3(0,.027,0),new THREE.Vector3(.027,.01,0)],.007,mat);
    return group;
  });
  let glassesCount=0;
  function glasses(parent:THREE.Object3D,x:number,y:number,z:number,style:number,scale=.72) {
    const pair=prototypes[style%3].clone(true);pair.position.set(x,y,z);pair.scale.setScalar(scale);pair.rotation.x=-.08;parent.add(pair);glassesCount++;
  }
  function frame(parent:THREE.Object3D,x:number,y:number,z:number,w:number,h:number) {
    for(const s of [-1,1]) {box(parent,x+s*w/2,y,z,.025,h,.045,gold);box(parent,x,y+s*h/2,z,w,.025,.045,gold);}
  }
  function sconce(parent:THREE.Object3D,x:number,y:number,z:number) {
    mesh(parent,new THREE.CylinderGeometry(.12,.12,.045,24),gold,x,y,z).rotation.x=Math.PI/2;
    tube(parent,[new THREE.Vector3(x,y-.15,z),new THREE.Vector3(x,y-.24,z+.19),new THREE.Vector3(x,y-.1,z+.32)],.025,gold);
    mesh(parent,new THREE.CylinderGeometry(.13,.23,.35,32,1,true),shade,x,y+.09,z+.32);
    mesh(parent,new THREE.SphereGeometry(.075,16,10),glow,x,y-.01,z+.32);
    for(const sy of [-.085,.265]) mesh(parent,new THREE.TorusGeometry(sy<0?.23:.13,.008,6,32),gold,x,y+sy,z+.32).rotation.x=Math.PI/2;
  }
  function displayBay(parent:THREE.Object3D,x:number,z:number) {
    box(parent,x,2.35,z,1.52,3.08,.16,wood);
    frame(parent,x,2.35,z+.1,1.42,2.96);
    for(let row=0;row<4;row++) {
      const y=1.32+row*.63;
      box(parent,x,y,z+.27,1.34,.048,.44,marble);
      box(parent,x,y+.045,z+.06,1.24,.025,.03,glow);
      for(let col=0;col<3;col++) {
        const px=x+(col-1)*.435;
        box(parent,px,y+.04,z+.27,.30,.028,.24,leather);
        glasses(parent,px,y+.145,z+.35,row+col,.68);
      }
    }
    box(parent,x,.62,z+.18,1.5,.98,.45,wood);
    for(const dx of [-.37,.37]) {frame(parent,x+dx,.62,z+.42,.67,.78);box(parent,x+dx,.83,z+.47,.18,.02,.035,gold);}
  }
  // Cabinet walls visible on both sides throughout the approach.
  for(const side of [-1,1]) {
    const wall=new THREE.Group();wall.position.set(side*5.16,0,-4.55);wall.rotation.y=-side*Math.PI/2;scene.add(wall);
    for(const x of [-1.8,0,1.8])displayBay(wall,x,0);
    sconce(wall,-2.75,3.25,.04);sconce(wall,2.75,3.25,.04);
    for(const y of [.12,.94,4.45,4.65])box(wall,0,y,.05,7.05,y===.12?.16:.055,.12,y===.94?gold:wood);
  }
  // Rear wall: cabinets flank an inset brand plaque; arched mirrors frame it.
  for(const side of [-1,1]) {
    displayBay(scene,side*1.88,-8.01);
    const arch=new THREE.Shape();
    arch.moveTo(-.57,-1.1);arch.lineTo(.57,-1.1);arch.lineTo(.57,.58);arch.absarc(0,.58,.57,0,Math.PI,false);arch.closePath();
    const mirror=new Reflector(new THREE.ShapeGeometry(arch),{color:0xd9c9a9,textureWidth:512,textureHeight:768,clipBias:.003});
    mirror.position.set(side*3.72,2.62,-8.035);mirror.name="Arched salon mirror";scene.add(mirror);mirrors.push(mirror);
    // Straight sides and a smooth arch, avoiding rounded spline corners below.
    const surround=new THREE.Group();surround.position.copy(mirror.position);surround.position.z+=.025;scene.add(surround);
    for(const x of [-.60,.60])box(surround,x,-.27,0,.065,1.72,.065,gold);
    box(surround,0,-1.13,0,1.26,.065,.065,gold);
    mesh(surround,new THREE.TorusGeometry(.60,.035,8,48,Math.PI),gold,0,.58,0);
    box(scene,side*3.72,1.32,-7.82,1.5,.09,.64,marble);
    sconce(scene,side*4.65,2.78,-8.02);
    glasses(scene,side*3.72,1.49,-7.71,1,.85);
  }
  // Do not recursively render mirrors inside each other's reflection pass.
  for(const mirror of mirrors) {
    const render=mirror.onBeforeRender.bind(mirror);
    mirror.onBeforeRender=(...args)=>{
      const others=mirrors.filter(other=>other!==mirror);
      const visibility=others.map(other=>other.visible);
      others.forEach(other=>{other.visible=false;});
      try {render(...args);} finally {others.forEach((other,i)=>{other.visible=visibility[i];});}
    };
  }
  // Cash wrap in front of the back wall, a velvet jewellery tray and desk lamps.
  box(scene,0,.67,-7.22,2.1,1.34,.78,wood);
  box(scene,0,1.38,-7.22,2.22,.10,.9,marble);
  for(let i=-7;i<=7;i++)box(scene,i*.128,.69,-6.80,.025,1.16,.055,gold);
  box(scene,0,1.45,-7.1,.7,.04,.35,leather);glasses(scene,0,1.56,-7.05,0);
  for(const side of [-1,1]) {
    mesh(scene,new THREE.CylinderGeometry(.16,.18,.035,24),gold,side*.77,1.46,-7.24);
    box(scene,side*.77,1.68,-7.24,.022,.43,.022,gold);
    mesh(scene,new THREE.CylinderGeometry(.12,.25,.28,32,1,true),shade,side*.77,1.96,-7.24);
    mesh(scene,new THREE.SphereGeometry(.055,12,8),glow,side*.77,1.88,-7.24);
  }
  // Upholstered consultation stools, tufting and slim brass legs.
  for(const side of [-1,1]) {
    const chair=new THREE.Group();chair.position.set(side*2.48,0,-5.45);chair.rotation.y=side*.23;scene.add(chair);
    mesh(chair,new THREE.CylinderGeometry(.39,.36,.16,32),leather,0,.67,0);
    const back=mesh(chair,new THREE.BoxGeometry(.76,.59,.13),leather,0,1.02,-.28);back.rotation.x=-.12;
    for(const x of [-.28,.28])for(const z of [-.23,.23])box(chair,x,.32,z,.027,.60,.027,gold);
    for(const x of [-.21,0,.21])mesh(chair,new THREE.SphereGeometry(.017,8,6),gold,x,1.05,-.20);
    const trayZ=-3.3;
    box(scene,side*3.6,1.52,trayZ,.88,.055,.65,leather);
    glasses(scene,side*3.6,1.66,trayZ+.1,2,.92);
    // Glass display covers and warm linear light on the existing island.
    box(scene,side*3.6,1.8,-4.85,1.2,.015,1.9,glass);
    for(const dx of [-.59,.59])box(scene,side*3.6+dx,1.64,-4.85,.015,.3,1.9,glass);
    for(let n=0;n<3;n++)glasses(scene,side*3.6,1.57,-4.2-n*.6,n,.82);
  }
  // Ceiling coffers, cornices and a thin perimeter light reveal.
  for(const x of [-4.9,4.9]) {box(scene,x,4.78,-4,.15,.24,8,wood);box(scene,x,4.60,-4,.045,.025,8,glow);}
  for(const z of [-.6,-3.5,-6.4,-8])box(scene,0,4.84,z,10,.18,.13,wood);
  // Ribbed glass pendants hang around the two original chandelier rings.
  for(const z of [-2.2,-5.8])for(let n=0;n<10;n++) {
    const a=n*Math.PI/5,x=Math.cos(a)*.9,pz=z+Math.sin(a)*.9;
    box(scene,x,3.65,pz,.016,.32,.016,gold);
    mesh(scene,new THREE.CylinderGeometry(.065,.065,.24,12,1,true),shade,x,3.55,pz);
    for(const y of [3.43,3.67])mesh(scene,new THREE.TorusGeometry(.067,.006,6,16),gold,x,y,pz).rotation.x=Math.PI/2;
  }
  // Decorative stair noses and a finely slatted entrance mat.
  box(scene,0,-.015,.89,3.5,.10,.54,marble);
  for(let i=-16;i<=16;i++)box(scene,i*.073,.066,-.62,.015,.018,.64,gold);
  // Geometry of prototypes is shared with the placed pairs and disposed by the owner.
  scene.userData.eyewearCount=glassesCount;
  return { mirrors, dispose:()=>mirrors.forEach(mirror=>mirror.dispose()) };
}
