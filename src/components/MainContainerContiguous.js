import React from "react";
import styles from "./MainContainerContiguous.module.css";
import Background3dContiguous from "./Background3dContiguous";

export default class MainContainerContiguous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Background3dContiguous shapeSize={1} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: window.innerHeight,
            overflow: "auto",
          }}
        >
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
          <div style={{ fontSize: 100 }}>content</div>
        </div>
      </>
    );
  }
}
