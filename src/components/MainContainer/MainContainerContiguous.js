import React from "react";
import styles from "./MainContainerContiguous.module.css";
import Background3dContiguous from "../Background/Background3dContiguous";
import AboutMeComponent from "../AboutMe/AboutMeComponent";
import ConnectComponent from "../Connect/ConnectComponent";
import ResumeComponent from "../Resume/ResumeComponent";
import ProjectsComponent from "../Projects/ProjectsComponent";

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

  divider = (name) => {
    return (
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        {name}
        <div className={styles.dividerLine}></div>
      </div>
    );
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
          <ConnectComponent />
          {this.divider("Projects")}
          <ProjectsComponent />
          {this.divider("Resume")}
          <ResumeComponent />
        </div>
      </>
    );
  }
}
