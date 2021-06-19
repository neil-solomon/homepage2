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
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
    this.setupOrbit();
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
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 15;
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
    this.outerLight.position.set(0, 0, 50);
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
      this.shapes[i] = {};
      this.shapes[i].shapeObject = this.makeTetrahedron(
        positionX,
        positionY,
        positionZ,
        rotationX,
        rotationY,
        shapeSize
      );
      this.shapes[i].originalPosition = {
        x: positionX,
        y: positionY,
        z: positionZ,
      };

      this.scene.add(this.shapes[i].shapeObject);
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

  setupOrbit = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.1;
    this.controls.enableDamping = true;
  };

  setupAnimation = () => {
    const animate = () => {
      requestAnimationFrame(animate);
      this.rotateShapes();
      this.updateShapesPosition();
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  };

  rotateShapes = () => {
    for (const shape of this.shapes) {
      shape.shapeObject.rotation.x += 0.001;
      shape.shapeObject.rotation.y += 0.001;
    }
  };

  updateShapesPosition = () => {
    const positionChange = this.props.scrollPosition / 1000;

    for (const shape of this.shapes) {
      if (shape.shapeObject.position.x > 0) {
        shape.shapeObject.position.x =
          shape.originalPosition.x + positionChange;
      } else {
        shape.shapeObject.position.x =
          shape.originalPosition.x - positionChange;
      }

      if (shape.shapeObject.position.y > 0) {
        shape.shapeObject.position.y =
          shape.originalPosition.y + positionChange;
      } else {
        shape.shapeObject.position.y =
          shape.originalPosition.y - positionChange;
      }

      if (shape.shapeObject.position.z > 0) {
        shape.shapeObject.position.z =
          shape.originalPosition.z + positionChange;
      } else {
        shape.shapeObject.position.z =
          shape.originalPosition.z - positionChange;
      }
    }
  };

  render() {
    return <div id="Background3dContiguous" className={styles.container}></div>;
  }
}
