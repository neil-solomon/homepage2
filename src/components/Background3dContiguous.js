import React from "react";
import styles from "./Background3dContiguous.module.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  Color,
  MeshStandardMaterial,
  PointLight,
  TetrahedronGeometry,
} from "three";

export default class Background3dContiguous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupLights();
    this.setupShapes();
    this.setupAnimation();
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
      .getElementById("Background3dContiguous")
      .appendChild(this.renderer.domElement);
  };

  setupLights = () => {
    this.innerLight = new PointLight(0xffffff, 1, 0, 1000);
    this.innerLight.position.set(0, 0, 0);
    this.scene.add(this.innerLight);

    this.outerLight = new PointLight(0x009688, 1, 0, 1000);
    this.outerLight.position.set(0, 0, 100);
    this.scene.add(this.outerLight);
  };

  setupShapes = () => {
    const pageSize = Math.max(window.innerWidth, window.innerHeight) / 100;
    const maxPositionX = pageSize;
    const maxPositionY = pageSize;
    const maxPositionZ = pageSize;
    const maxRotation = Math.PI;
    const numShapes = 100;

    this.shapes = new Array(numShapes);

    for (let i = 0; i < this.shapes.length; i++) {
      const positionX = Math.random() * maxPositionX * 2 - maxPositionX;
      const positionY = Math.random() * maxPositionY * 2 - maxPositionY;
      const positionZ = Math.random() * maxPositionZ * 2 - maxPositionZ;
      const rotationX = Math.random() * maxRotation * 2 - maxRotation;
      const rotationY = Math.random() * maxRotation * 2 - maxRotation;
      const shapeSize = this.props.shapeSize || 0.1;

      this.shapes[i] = this.makeTetrahedron(
        positionX,
        positionY,
        positionZ,
        rotationX,
        rotationY,
        shapeSize
      );

      this.scene.add(this.shapes[i]);
    }
  };

  makeTetrahedron = (
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    size
  ) => {
    const geometry = new TetrahedronGeometry(size);
    const material = new MeshStandardMaterial({ color: 0xcfd8dc });
    const tetrahedron = new Mesh(geometry, material);
    tetrahedron.position.set(positionX, positionY, positionZ);
    tetrahedron.rotation.x = rotationX;
    tetrahedron.rotation.y = rotationY;
    return tetrahedron;
  };

  setupAnimation = () => {
    const animate = () => {
      requestAnimationFrame(animate);
      this.rotateShapes();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  };

  rotateShapes = () => {
    for (const shape of this.shapes) {
      shape.rotation.x += 0.001;
      shape.rotation.y += 0.001;
    }
  };

  render() {
    return <div id="Background3dContiguous" className={styles.container}></div>;
  }
}
