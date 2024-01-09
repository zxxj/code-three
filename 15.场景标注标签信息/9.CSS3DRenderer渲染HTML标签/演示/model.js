import * as THREE from 'three';
// 引入CSS2模型对象CSS2DObject
import {
    CSS2DObject
} from 'three/addons/renderers/CSS2DRenderer.js';

const geometry = new THREE.ConeGeometry(25, 80);
geometry.translate(0, 40, 0); //y轴正方向，平移高度一半
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(50, 0, 50);

// 可视化模型的局部坐标系
const axesHelper = new THREE.AxesHelper(100);
mesh.add(axesHelper);

const div = document.getElementById('tag');
// HTML元素转化为threejs的CSS2模型对象
const tag = new CSS2DObject(div);
//标签tag作为mesh子对象，默认受到父对象位置影响
mesh.add(tag);
tag.position.y += 80; //圆锥mesh局部坐标系原点在自己底部时候，标签需要向上偏移圆锥自身高度
const group = new THREE.Group();
group.add(mesh);



const plane = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), new THREE.MeshLambertMaterial({side:THREE.DoubleSide}));
group.add(plane);


export default group;