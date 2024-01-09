import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import gui from './gui.js';

import model from './model.js'; //模型对象

//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中


//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 0);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// gui控制环境光光照强度`.intensity`
gui.add(ambient, 'intensity', 0, 2).name('环境光.intensity');

const dirHelper = new THREE.DirectionalLightHelper( directionalLight, 5);
scene.add( dirHelper );
// 平行光子菜单
const dirFolder = gui.addFolder('平行光');
dirFolder.add(directionalLight, 'intensity', 0, 2);
dirFolder.add(directionalLight.position, 'y', 0, 300).onChange(function(value){
    dirHelper.update();
});
const obj = {
    R: 100,
    angle: 0,
};
dirFolder.add(obj, 'R', 0, 300).onChange(function(value){
    directionalLight.position.x = value * Math.cos(obj.angle);
    directionalLight.position.z = value * Math.sin(obj.angle);
    dirHelper.update();
});
dirFolder.add(obj, 'angle', 0, Math.PI*2).onChange(function(value){
    directionalLight.position.x = obj.R * Math.cos(value);
    directionalLight.position.z = obj.R * Math.sin(value);
    dirHelper.update();
});






//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(202, 123, 125);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
//解决加载gltf格式模型颜色偏差问题
renderer.outputEncoding = THREE.sRGBEncoding;


// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};