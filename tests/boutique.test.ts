import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { addBoutiqueDetails } from "../src/components/intro/boutiqueDetails";

test("detailed salon builds finite geometry with eyewear displays and reflective mirrors", () => {
  const scene = new THREE.Scene();
  const materials: THREE.Material[] = [];
  const make = () => { const material = new THREE.MeshStandardMaterial(); materials.push(material); return material; };
  const palette = {gold:make(),wood:make(),stone:make(),dark:make(),glow:make(),black:make(),leather:make(),marble:make(),glass:make()};
  const details = addBoutiqueDetails(scene, palette, materials);
  const geometries = new Set<THREE.BufferGeometry>();
  try {
    assert.equal(scene.userData.eyewearCount, 107);
    assert.equal(details.mirrors.length, 2);
    for (const mirror of details.mirrors) {
      assert.equal(mirror.getRenderTarget().width, 512);
      assert.ok(mirror.position.z < -7);
    }
    scene.traverse(object => {
      if (!(object instanceof THREE.Mesh)) return;
      geometries.add(object.geometry);
      assert.ok(object.position.toArray().every(Number.isFinite));
    });
    for (const geometry of geometries) {
      geometry.computeBoundingSphere();
      assert.ok(Number.isFinite(geometry.boundingSphere?.radius));
    }
  } finally {
    details.dispose();
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(material => material.dispose());
  }
});
