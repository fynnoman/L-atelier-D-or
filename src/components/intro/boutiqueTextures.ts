import * as THREE from "three";

type Surface = "walnut" | "limestone" | "marble" | "leather" | "brass";

/** Tileable local material maps: albedo plus separate linear relief/roughness. */
export function surfaceMaps(surface: Surface, anisotropy: number) {
  const size = 512;
  const color = document.createElement("canvas");
  const relief = document.createElement("canvas");
  const roughness = document.createElement("canvas");
  for (const canvas of [color, relief, roughness]) canvas.width = canvas.height = size;
  const ctx = color.getContext("2d")!;
  const bumpCtx = relief.getContext("2d")!;
  const roughCtx = roughness.getContext("2d")!;
  const pixels = ctx.createImageData(size, size);
  const bumps = bumpCtx.createImageData(size, size);
  const rough = roughCtx.createImageData(size, size);
  let seed = 7127;
  const noise = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const tau = Math.PI * 2;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    const grain = noise();
    let rgb: number[], height: number, polish: number;
    if (surface === "walnut") {
      const warp = Math.sin(v*tau)*.035 + Math.sin(v*tau*3)*.012;
      const vein = Math.sin((u+warp)*tau*24)*.5 + Math.sin((u+warp)*tau*73)*.16;
      const broad = Math.sin((u+warp)*tau*5)*.4;
      const value = vein*15+broad*23+(grain-.5)*12;
      rgb = [99+value,63+value*.72,39+value*.45]; height = 125+vein*35; polish = 170+vein*18;
    } else if (surface === "marble") {
      const warp = Math.sin(u*tau*2)*.24 + Math.sin(v*tau*3)*.09;
      const vein = Math.pow(Math.max(0, 1-Math.abs(Math.sin((u+v+warp)*tau*2))), 14);
      const fine = Math.pow(Math.max(0,1-Math.abs(Math.sin((u-v+warp*.6)*tau*7))),20);
      const value = vein*65+fine*17;
      rgb=[222-value+(grain-.5)*6,213-value,193-value*.9]; height=150-vein*8;polish=100+vein*30;
    } else if (surface === "leather") {
      const pores = Math.pow(grain, 12)*45;
      rgb=[77-pores,52-pores*.6,34-pores*.4];height=160-pores*2;polish=180+pores;
    } else if(surface === "brass") {
      const line = Math.sin(v*tau*191)*4;
      rgb=[204+line,170+line,105+line];height=120+line+(grain-.5)*8;polish=140+line*3;
    } else {
      const fleck = grain > .97 ? -27 : (grain-.5)*18;
      const cloud = Math.sin(u*tau*3)*Math.cos(v*tau*2)*8;
      rgb=[192+fleck+cloud,179+fleck+cloud,157+fleck+cloud];height=145+fleck*2;polish=220+fleck;
    }
    const i=(y*size+x)*4;
    for(let c=0;c<3;c++) {pixels.data[i+c]=rgb[c];bumps.data[i+c]=height;rough.data[i+c]=polish;}
    pixels.data[i+3]=bumps.data[i+3]=rough.data[i+3]=255;
  }
  ctx.putImageData(pixels,0,0);bumpCtx.putImageData(bumps,0,0);roughCtx.putImageData(rough,0,0);
  const maps=[color,relief,roughness].map(canvas=>{
    const texture=new THREE.CanvasTexture(canvas);
    texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
    texture.anisotropy=anisotropy;
    return texture;
  });
  maps[0].colorSpace=THREE.SRGBColorSpace;
  return {map:maps[0],bumpMap:maps[1],roughnessMap:maps[2],textures:maps};
}
