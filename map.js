import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';

const map2 = new THREE.Group();
 //创建一个纹理加载器对象
 const loadTex = new THREE.TextureLoader();
 //加载图片返回一个纹理对象Texture
 // const texture = loadTex.load('./earth.png');
const texture = loadTex.load('./指北针.png');
//贴图阵列
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2,2);
//贴图偏移
texture.offset.x += 0.1;
texture.offset.y += 0.5;
for(let i = 0; i < 2 ; i ++){
    // for(let j = 0; i < 1 ; j ++){
    //     for(let k = 0; k < 1 ; k ++){ 
   
   
    const geometry = new THREE.PlaneGeometry(100,100);
    const material = new THREE.MeshLambertMaterial({
        // color:0x00ffff,
        map:texture,//设置材质的颜色贴图,把图片作为mesh材质的贴图
        transparent:true,//开启PNG透明底
        opacity:0.6,
        
    })
    
    const map = new THREE.Mesh(geometry,material);
    const x = (i*0.5)*200;
    // const y = (j*0.5)*200;
    // const z = (k*0.5)*200;
    map.position.set(x,0,0);
    map2.add(map);
    // }
//   }
};
map2.rotateX(-Math.PI/2);
// const num = 1000;
// for(let i = 0; i <num; i++){
//     const geometry2 = new THREE.SphereGeometry(2);
//     const material2 = new THREE.MeshLambertMaterial({color:0xffff00,

//     })
//     const map = new THREE.Mesh(geometry2,material2);
//     const x = (Math.random()-0.5)*3000;
//     const y = (Math.random()-0.5)*3000;
//     const z = (Math.random()-0.5)*3000;
//     map.position.set(x,y,z);
    
// }
export  {map2,texture};

