// Original sculptural panther. No third-party model or texture licenses required.
// Rebuild with: node scripts/build-panther.mjs
import * as THREE from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { writeFileSync } from 'node:fs';

globalThis.FileReader = class {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then(buffer => { this.result = buffer; this.onloadend?.(); });
  }
};

const black = new THREE.MeshPhysicalMaterial({ color: '#101216', metalness: 0.18, roughness: 0.40, clearcoat: 0.28, clearcoatRoughness: 0.35 });
const nose = new THREE.MeshPhysicalMaterial({ color: '#07090d', roughness: 0.28, metalness: 0.18 });
const sapphire = new THREE.MeshPhysicalMaterial({ color: '#198edc', emissive: '#087cc9', emissiveIntensity: 0.25, metalness: 0.32, roughness: 0.14, clearcoat: 1 });
const pupil = new THREE.MeshStandardMaterial({ color: '#00030a', roughness: 0.18 });
const scene = new THREE.Scene();
const panther = new THREE.Group();
panther.name = 'Panther';
scene.add(panther);

// Smooth union of anatomical ellipsoids; baked once, never evaluated in the browser.
function sculpt(name, forms, bounds, resolution = 80, blend = 0.085) {
  const mc = new MarchingCubes(resolution, black, false, false, 100000);
  mc.isolation = 0;
  const [cx, cy, cz, scale] = bounds;
  for (let z = 0; z < resolution; z++) for (let y = 0; y < resolution; y++) for (let x = 0; x < resolution; x++) {
    const px = (x / resolution * 2 - 1) * scale + cx;
    const py = (y / resolution * 2 - 1) * scale + cy;
    const pz = (z / resolution * 2 - 1) * scale + cz;
    let d = 100;
    for (const [ex, ey, ez, rx, ry, rz] of forms) {
      const a = (px - ex) / rx, b = (py - ey) / ry, c = (pz - ez) / rz;
      const k0 = Math.hypot(a, b, c);
      const k1 = Math.hypot(a / rx, b / ry, c / rz);
      const e = k0 * (k0 - 1) / Math.max(k1, 0.00001);
      const h = Math.max(blend - Math.abs(d - e), 0) / blend;
      d = Math.min(d, e) - h * h * blend * 0.25;
    }
    mc.field[z * resolution * resolution + y * resolution + x] = -d;
  }
  mc.update();
  const geometry = new THREE.BufferGeometry();
  for (const attr of ['position', 'normal']) {
    geometry.setAttribute(attr, new THREE.BufferAttribute(mc.geometry.attributes[attr].array.slice(0, mc.count * 3), 3));
  }
  geometry.scale(scale, scale, scale);
  geometry.translate(cx, cy, cz);
  const indexed = mergeVertices(geometry, 0.0001);
  // Taubin smoothing removes sampling ripples without shrinking the silhouette.
  const positions = indexed.attributes.position;
  const adjacency = Array.from({ length: positions.count }, () => new Set());
  const indices = indexed.index.array;
  for (let i = 0; i < indices.length; i += 3) {
    const [a, b, c] = indices.slice(i, i + 3);
    adjacency[a].add(b).add(c); adjacency[b].add(a).add(c); adjacency[c].add(a).add(b);
  }
  for (let pass = 0; pass < 12; pass++) {
    const source = positions.array.slice();
    const factor = pass % 2 === 0 ? 0.5 : -0.53;
    adjacency.forEach((neighbors, i) => {
      if (!neighbors.size) return;
      for (let axis = 0; axis < 3; axis++) {
        let sum = 0;
        neighbors.forEach(j => { sum += source[j * 3 + axis]; });
        positions.array[i * 3 + axis] = source[i * 3 + axis] + factor * (sum / neighbors.size - source[i * 3 + axis]);
      }
    });
  }
  indexed.computeVertexNormals();
  const mesh = new THREE.Mesh(indexed, black);
  mesh.name = name;
  mc.geometry.dispose();
  geometry.dispose();
  return mesh;
}

const bodyForms = [
  [-0.28, 0.93, 0, 1.02, 0.32, 0.32], // long, low feline back
  [0.48, 0.92, 0, 0.48, 0.40, 0.36],
  [-0.91, 0.83, 0, 0.44, 0.41, 0.35],
  [0.86, 1.06, 0, 0.34, 0.39, 0.30], // rising neck
];
for (const side of [-1, 1]) {
  const z = side * 0.25;
  const offset = side === 1 ? 0.15 : -0.27;
  bodyForms.push(
    [0.60 + offset, 0.76, z, 0.25, 0.37, 0.20],
    [0.76 + offset, 0.47, z, 0.14, 0.29, 0.125],
    [0.86 + offset, 0.24, z + 0.025, 0.105, 0.24, 0.105],
    [1.00 + offset, 0.105, z + 0.04, 0.25, 0.10, 0.15],
    [-0.96 + offset, 0.67, z, 0.29, 0.36, 0.22],
    [-0.77 + offset, 0.43, z, 0.19, 0.20, 0.15],
    [-1.08 + offset, 0.28, z, 0.22, 0.11, 0.105],
    [-1.22 + offset, 0.16, z, 0.09, 0.18, 0.095],
    [-1.10 + offset, 0.085, z + 0.025, 0.23, 0.085, 0.145],
  );
}
panther.add(sculpt('Body', bodyForms, [0, 0.75, 0, 1.8], 100));

const head = new THREE.Group();
head.name = 'Head';
head.position.set(1.02, 1.18, 0);
head.scale.setScalar(0.91);
head.rotation.y = 0.78;
panther.add(head);
head.add(sculpt('Face', [
  [0, 0.035, 0, 0.315, 0.25, 0.29],
  [-0.19, -0.08, 0.11, 0.17, 0.19, 0.21],
  [0.19, -0.08, 0.11, 0.17, 0.19, 0.21],
  [0, -0.175, 0.22, 0.22, 0.105, 0.20],
  [-0.10, -0.10, 0.30, 0.135, 0.095, 0.13],
  [0.10, -0.10, 0.30, 0.135, 0.095, 0.13],
  [0, 0.005, 0.25, 0.11, 0.14, 0.13],
  [-0.245, 0.235, -0.045, 0.09, 0.10, 0.065],
  [0.245, 0.235, -0.045, 0.09, 0.10, 0.065],
  [-0.172, 0.10, 0.239, 0.135, 0.048, 0.076],
  [0.172, 0.10, 0.239, 0.135, 0.048, 0.076],
], [0, 0, 0.06, 0.62], 86, 0.045));

function ellipsoid(parent, name, material, position, scale) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  parent.add(mesh);
  return mesh;
}
for (const side of [-1, 1]) {
  ellipsoid(head, `Ear${side}`, nose, [side * 0.245, 0.245, 0.012], [0.052, 0.065, 0.014]);
  const eye = new THREE.Group();
  eye.name = side === 1 ? 'EyeRight' : 'EyeLeft';
  eye.position.set(side * 0.185, 0.060, 0.273);
  eye.rotation.z = side * 0.16;
  eye.rotation.y = side * 0.22;
  head.add(eye);
  ellipsoid(eye, 'EyeSocket', nose, [0, 0, 0], [0.083, 0.041, 0.039]);
  ellipsoid(eye, 'Sapphire', sapphire, [0, 0, 0.027], [0.052, 0.026, 0.025]);
  ellipsoid(eye, 'Pupil', pupil, [0, 0, 0.049], [0.022, 0.023, 0.009]);
  ellipsoid(eye, 'Catchlight', new THREE.MeshBasicMaterial({ color: '#c1eaff' }), [-0.018, 0.012, 0.054], [0.004, 0.003, 0.003]);
  for (let i = 0; i < 3; i++) {
    ellipsoid(head, 'WhiskerRoot', nose, [side * (0.10 + i * 0.04), -0.085 - i * 0.014, 0.414 - i * 0.014], [0.007, 0.006, 0.004]);
  }
}
const noseShape = new THREE.Shape();
noseShape.moveTo(-0.088, 0.027);
noseShape.quadraticCurveTo(0, 0.06, 0.088, 0.027);
noseShape.quadraticCurveTo(0.075, 0, 0, -0.035);
noseShape.quadraticCurveTo(-0.075, 0, -0.088, 0.027);
const noseMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(noseShape, { depth: 0.012, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.013, bevelThickness: 0.012 }), nose);
noseMesh.position.set(0, -0.07, 0.418);
head.add(noseMesh);

function tube(points, radius, material) {
  return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), 64, radius, 10, false), material);
}
head.add(tube([[0, -0.09, 0.431], [0, -0.14, 0.413], [-0.09, -0.176, 0.378], [-0.18, -0.158, 0.323]], 0.004, nose));
head.add(tube([[0, -0.14, 0.413], [0.09, -0.176, 0.378], [0.18, -0.158, 0.323]], 0.004, nose));

const tail = new THREE.Group();
tail.name = 'Tail';
tail.position.set(-1.18, 0.97, -0.08);
panther.add(tail);
const curve = new THREE.CatmullRomCurve3([[0, 0, 0], [-0.40, -0.12, 0], [-0.75, -0.46, 0.05], [-0.95, -0.69, 0.25], [-1.20, -0.62, 0.48], [-1.28, -0.40, 0.49], [-1.17, -0.29, 0.43]].map(p => new THREE.Vector3(...p)));
const tailGeo = new THREE.TubeGeometry(curve, 90, 1, 12, false);
const pos = tailGeo.attributes.position;
for (let i = 0; i <= 90; i++) {
  const center = curve.getPointAt(i / 90);
  const radius = 0.078 * (1 - 0.76 * i / 90);
  for (let j = 0; j <= 12; j++) {
    const index = i * 13 + j;
    pos.setXYZ(index, center.x + (pos.getX(index) - center.x) * radius, center.y + (pos.getY(index) - center.y) * radius, center.z + (pos.getZ(index) - center.z) * radius);
  }
}
tailGeo.computeVertexNormals();
tail.add(new THREE.Mesh(tailGeo, black));
ellipsoid(tail, 'TailTip', black, curve.getPoint(1).toArray(), [0.019, 0.019, 0.019]);

new GLTFExporter().parse(scene, data => {
  writeFileSync(new URL('../public/panther/panther.glb', import.meta.url), Buffer.from(data));
  console.log(`Original panther exported: ${(data.byteLength / 1024).toFixed(0)} KB`);
}, error => { throw error; }, { binary: true });
