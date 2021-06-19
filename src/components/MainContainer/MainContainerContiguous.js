import React from "react";
import styles from "./MainContainerContiguous.module.css";
import Background3dContiguous from "../Background/Background3dContiguous";
import AboutMeComponent from "../AboutMe/AboutMeComponent";
import AboutMe from "../AboutMe/AboutMe";

export default class MainContainerContiguous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
  }

  handleScroll = (event) => {
    this.setState({ scrollPosition: event.target.scrollTop });
  };

  render() {
    return (
      <>
        <Background3dContiguous
          shapeSize={1}
          scrollPosition={this.state.scrollPosition}
        />
        <div onScroll={this.handleScroll} className={styles.content}>
          <AboutMeComponent />
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
