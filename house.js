import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';

const group1= new THREE.Group();
group1.name="高层";
for(let i = 0;i < 5;i ++){
    const geometry1 = new THREE.BoxGeometry(10,80,10);
    const material1 = new THREE.MeshLambertMaterial({
    color:0x00ff00,
    })
    const mesh1 = new THREE.Mesh(geometry1,material1);
    mesh1.position.x = i * 30;
    mesh1.name = i+1+'号楼' ;
    group1.add(mesh1);
}
group1.position.z = -10;
group1.position.y = 40;


const group2= new THREE.Group();
group2.name="别墅" ;
for(let i = 0;i < 5;i ++){
    const geometry2 = new THREE.BoxGeometry(10,20,10);
    const material2 = new THREE.MeshLambertMaterial({
    color:0x00ffff,
    })
    const mesh2 = new THREE.Mesh(geometry2,material2);
    mesh2.position.x = i * 30;
    mesh2.name = i+6+'号楼';
    group2.add(mesh2);
}
group2.position.z = 10;
group2.position.y = 10;

const house = new THREE.Group();
house.name = "小区房子"
house.add(group1,group2);
house.position.set(10,0,0);
//遍历所有模型
house.traverse(function(obj){
    // if(obj.isMesh)console.log('名称',obj.name);
    if(obj.isMesh){
        obj.material.color.set(0x00ff00);
    }
    
})
const worldPosition = new THREE.Vector3();//实例化一个三维坐标
const obj = house.getObjectByName('1号楼');//通过名称选中一个物体
obj.getWorldPosition(worldPosition);//得到物体的世界坐标
// console.log('世界坐标',worldPosition);

const meshAxesHelper = new THREE.AxesHelper(50);//可视化坐标系
obj.add(meshAxesHelper);
obj.translateZ(50);
obj.material.color.set(0xff0000);


export default house;