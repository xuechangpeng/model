import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';

//添加顶点数据
const vertices = new Float32Array([
    //数组里编写坐标数据
//     -25, -25,  25,  // 0 前面左下角
//     25, -25,  25,  // 1 前面右下角
//     25,  25,  25,  // 2 前面右上角
//    -25,  25,  25,  // 3 前面左上角

//    -25, -25, -25,  // 4 后面左下角
//     25, -25, -25,  // 5 后面右下角
//     25,  25, -25,  // 6 后面右上角
//    -25,  25, -25,  // 7 后面左上角

   -25, -25,  25,  // 0 前面左下角
    25, -25,  25,  // 1 前面右下角
    25,  25,  25,  // 2 前面右上角
    -25, -25,  25,  // 0 前面左下角
    25,  25,  25,  // 2 前面右上角
    -25,  25,  25,  // 3 前面左上角

    -25, -25, -25,  // 4 后面左下角
    25, -25, -25,  // 5 后面右下角
    25,  25, -25,  // 6 后面右上角
    -25, -25, -25,  // 4 后面左下角
    25,  25, -25,  // 6 后面右上角
    -25,  25, -25,  // 7 后面左上角

    25, -25,  25,  // 1 前面右下角
    25,  25,  25,  // 2 前面右上角
    25,  25, -25,  // 6 后面右上角
    25, -25,  25,  // 1 前面右下角
    25,  25, -25,  // 6 后面右上角
    25, -25, -25,  // 5 后面右下角

    -25, -25,  25,  // 0 前面左下角
    -25,  25,  25,  // 3 前面左上角
    -25,  25, -25,  // 7 后面左上角
    -25, -25,  25,  // 0 前面左下角
    -25,  25, -25,  // 7 后面左上角
    -25, -25, -25,  // 4 后面左下角

    -25,  25,  25,  // 3 前面左上角
    25,  25,  25,  // 2 前面右上角
    25,  25, -25,  // 6 后面右上角
    -25,  25,  25,  // 3 前面左上角
    25,  25, -25,  // 6 后面右上角
    -25,  25, -25,  // 7 后面左上角

    -25, -25,  25,  // 0 前面左下角
    25, -25,  25,  // 1 前面右下角
    25, -25, -25,  // 5 后面右下角
    -25, -25,  25,  // 0 前面左下角
    25, -25, -25,  // 5 后面右下角
    -25, -25, -25,  // 4 后面左下角
])
//创建属性缓冲对象3个数字表示1个顶点数据
// const attribute = new THREE.BufferAttribute(vertices,3);
//设置几何体的顶点位置属性
// geometry.attributes.position = attribute;

//添加UV坐标
const uvs = new Float32Array([
    0,0,
    1,0,
    1,1,
    0,0,
    1,1,
    0,1,
]);


//添加顶点法向量数据

const normals = new Float32Array([
    //数组里编写坐标数据
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,

    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,

    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,

    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,

    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,

    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    

    // 0,0,-1,
    // 0,0,-1,
    // 0,0,-1,
    // 0,0,-1,

    // 1,0,0,
    // 1,0,0,
    // 1,0,0,
    // 1,0,0,

])
//定义顶点法线数据


//类型化数组创建一个顶点数据索引
const color = new Float32Array([
    1, 0, 0,  // 红色
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    0, 1, 0,  // 绿色
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, 0, 1,  // 蓝色
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    1, 1, 1,  // 白色
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 0, //黄色
    1, 1, 0, 
    1, 1, 0, 
    1, 1, 0, 
    1, 1, 0, 
    1, 1, 0, 

    1, 0.5, 0, 
    1, 0.5, 0, 
    1, 0.5, 0, 
    1, 0.5, 0, 
    1, 0.5, 0, 
    1, 0.5, 0, 


    

])
//几何体顶点索引定义
// geometry.index = new THREE.BufferAttribute(indexes,1);


// const indexes = new Uint16Array([
//     0, 1, 2, 0, 2, 3,  // 前面
//     4, 5, 6, 4, 6, 7,  // 后面
//     1, 2, 6, 1, 6, 5,  // 右面
//     0, 3, 7, 0, 7, 4,  // 左面
//     3, 2, 6, 3, 6, 7,  // 上面
//     0, 1, 5, 0, 5, 4   // 下面


// ])
//创建一个缓冲类型几何体 空的几何对象
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(color, 3));
geometry.attributes.uv = new THREE.BufferAttribute(uvs,2);
// geometry.setIndex(new THREE.BufferAttribute(indexes, 1));
//创建一个纹理加载器对象
const loadTex = new THREE.TextureLoader();
//加载图片返回一个纹理对象Texture
const texture = loadTex.load('./earth.png');
//自定义网格模型
const material = new THREE.MeshLambertMaterial({
    // color:0x0000ff,
    vertexColors: true, // 启用顶点着色
    side:THREE.DoubleSide,//双面可见
    // wireframe:true,
    map:texture,
  
})
const mesh = new THREE.Mesh(geometry,material);
// //线材质
// const material = new THREE.LineBasicMaterial({
//     color:0x00ff00,
// })
// const line = new THREE.LineSegments(geometry,material);

// //点材质
// const material = new THREE.PointsMaterial({
//     color:0x0000ff,
//     size:10,
// })
// //定义一个点模型对象
// const points = new THREE.Points(geometry,material);
//导出模型

//创建一个欧拉对象,按弧度旋转
// const eu = new THREE.Euler(0,Math.PI/4,0);
// mesh.rotation.y = Math.PI/4;
// console.log('eu',mesh.rotation);
export default mesh;