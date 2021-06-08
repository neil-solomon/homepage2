import React from "react";
import styles from "./Background3d.module.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  Color,
  MeshStandardMaterial,
  PointLight,
  PointLightHelper,
  SphereGeometry,
  DodecahedronGeometry,
  IcosahedronGeometry,
  TetrahedronGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Background3d extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseToCenterRatioX: 0.25,
      mouseToCenterRatioY: 0,
    };
  }

  componentDidMount = () => {
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupLight();
    this.setupShapes();
    this.setupOrbit();
    this.setupAnimation();

    this.addHandleMouseMove();
  };

  componentWillUnmount = () => {
    this.removeHandleMouseMove();
  };

  setupScene = () => {
    this.scene = new Scene();
    this.scene.background = new Color(0xffffff);
  };

  setupCamera = () => {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 10;
  };

  setupRenderer = () => {
    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("Background3d")
      .appendChild(this.renderer.domElement);
  };

  setupLight = () => {
    this.pageSize = Math.max(window.innerWidth, window.innerHeight) / 100;
    this.pointLight = new PointLight(0xffffff, 1, 0, 1000);
    this.pointLight.position.set(0, 0, 0);

    this.pointLight2 = new PointLight(0x009688, 1, 0, 1000);
    this.pointLight2.position.set(0, 0, 100);
    this.scene.add(this.pointLight);
    this.scene.add(this.pointLight2);

    // this.pointLightHelper = new PointLightHelper(this.pointLight, 1, 0x00ff00);
    // this.scene.add(this.pointLightHelper);
  };

  setupOrbit = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.state.mouseToCenterRatioX;
    this.controls.enableDamping = true;
  };

  setupAnimation = () => {
    const animate = () => {
      requestAnimationFrame(animate);
      this.controls.autoRotateSpeed = this.state.mouseToCenterRatioX / 3;
      this.pointLight2.power = (2 + this.state.mouseToCenterRatioY) * 15;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  };

  rotateShapes = () => {
    for (const shape of this.shapes) {
      shape.rotation.x += this.state.mouseToCenterRatioX / 30;
      shape.rotation.y += this.state.mouseToCenterRatioY / 30;
    }
  };

  setupShapes = () => {
    const numShapes = 1000;
    const maxPositionX = this.pageSize;
    const maxPositionY = this.pageSize;
    const maxPositionZ = this.pageSize;
    const maxRotation = Math.PI;

    this.shapes = new Array(numShapes);

    for (let i = 0; i < this.shapes.length; i++) {
      const positionX = Math.random() * maxPositionX * 2 - maxPositionX;
      const positionY = Math.random() * maxPositionY * 2 - maxPositionY;
      const positionZ = Math.random() * maxPositionZ * 2 - maxPositionZ;
      const rotationX = Math.random() * maxRotation * 2 - maxRotation;
      const rotationY = Math.random() * maxRotation * 2 - maxRotation;
      const shape = this.makeSphere(positionX, positionY, positionZ);
      // const shape = this.makeIcosahedron(
      //   positionX,
      //   positionY,
      //   positionZ,
      //   rotationX,
      //   rotationY
      // );
      // const shape = this.makeTetrahedron(
      //   positionX,
      //   positionY,
      //   positionZ,
      //   rotationX,
      //   rotationY
      // );
      this.shapes[i] = shape;
      this.scene.add(this.shapes[i]);
    }
  };

  makeSphere = (positionX, positionY, positionZ) => {
    const geometry = new SphereGeometry(0.1, 32, 32);
    const material = new MeshStandardMaterial({ color: 0xcfd8dc });
    const sphere = new Mesh(geometry, material);
    sphere.position.set(positionX, positionY, positionZ);
    return sphere;
  };

  makeIcosahedron = (positionX, positionY, positionZ, rotationX, rotationY) => {
    const geometry = new IcosahedronGeometry(0.1);
    const material = new MeshStandardMaterial({ color: 0xcfd8dc });
    const icosahedron = new Mesh(geometry, material);
    icosahedron.position.set(positionX, positionY, positionZ);
    icosahedron.rotation.x = rotationX;
    icosahedron.rotation.y = rotationY;
    return icosahedron;
  };

  makeTetrahedron = (positionX, positionY, positionZ, rotationX, rotationY) => {
    const geometry = new TetrahedronGeometry(0.1);
    const material = new MeshStandardMaterial({ color: 0xcfd8dc });
    const tetrahedron = new Mesh(geometry, material);
    tetrahedron.position.set(positionX, positionY, positionZ);
    tetrahedron.rotation.x = rotationX;
    tetrahedron.rotation.y = rotationY;
    return tetrahedron;
  };

  addHandleMouseMove = () => {
    document.body.addEventListener("mousemove", this.handleMouseMove);
  };

  removeHandleMouseMove = () => {
    document.body.removeEventListener("mousemove", this.handleMouseMove);
  };

  handleMouseMove = (event) => {
    const centerOfScreenX = window.innerWidth / 2;
    const centerOfScreenY = window.innerHeight / 2;
    const mouseToCenterRatioX =
      (event.clientX - centerOfScreenX) / centerOfScreenX;
    const mouseToCenterRatioY =
      (-1 * (event.clientY - centerOfScreenY)) / centerOfScreenY;
    this.setState({ mouseToCenterRatioX, mouseToCenterRatioY });
  };

  render() {
    return <div id="Background3d" className={styles.container}></div>;
  }
}
