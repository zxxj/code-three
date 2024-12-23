import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import model from './model.js'; //模型对象

import gui from './gui.js'; 

//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中


//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// 环境光子菜单
const ambientFolder = gui.addFolder('环境光');
ambientFolder.close();//关闭菜单
// 环境光强度
ambientFolder.add(directionalLight, 'intensity',0,2);
// 平行光子菜单
const dirFolder = gui.addFolder('平行光');
dirFolder.close();//关闭菜单
// 平行光强度
dirFolder.add(directionalLight, 'intensity',0,2);
const dirFolder2 = dirFolder.addFolder('位置');//子菜单的子菜单
dirFolder2.close();//关闭菜单
// 平行光位置
dirFolder2.add(directionalLight.position, 'x',-400,400);
dirFolder2.add(directionalLight.position, 'y',-400,400);
dirFolder2.add(directionalLight.position, 'z',-400,400);


//渲染器和相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(-400, 400,200);
camera.lookAt(0, 0, 0);


const renderer = new THREE.WebGLRenderer({
    antialias:true,//抗锯齿
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


renderer.outputEncoding = THREE.sRGBEncoding;

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);


// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();



// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};