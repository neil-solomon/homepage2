import React from "react";
import styles from "./MainContainer.module.css";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Connect from "./Connect";
import BackgroundAnimations from "./BackgroundAnimations";
import BackgroundStatic from "./BackgroundStatic";
import Background3d from "./Background3d";

export default class MainContainer extends React.Component {
  state = {
    menuVisible: false,
    pageViews: [
      { name: "About Me", inView: true },
      { name: "Projects", inView: false },
      { name: "Resume", inView: false },
      { name: "Connect", inView: false },
    ],
  };

  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  openMenu = () => {
    this.setState({ menuVisible: true });
  };

  closeMenu = () => {
    this.setState({ menuVisible: false });
  };

  changePageView = (newPageView) => {
    var pageViews = [...this.state.pageViews];
    for (let i = 0; i < pageViews.length; ++i) {
      if (i === newPageView) {
        pageViews[i].inView = true;
      } else {
        pageViews[i].inView = false;
      }
    }
    this.setState({ pageViews, menuVisible: false });
  };

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        {/* <BackgroundAnimations /> */}
        {/* <BackgroundStatic /> */}
        <Background3d />
        <MenuButton
          toggleMenu={this.toggleMenu}
          menuVisible={this.state.menuVisible}
        />
        {window.innerWidth > 900 && (
          <div
            className={styles.pageTitle}
            key={"pageTitle" + JSON.stringify(this.state.pageViews)}
          >
            {this.state.pageViews[0].inView && <>About Me</>}
            {this.state.pageViews[1].inView && <>Projects</>}
            {this.state.pageViews[2].inView && <>Resume</>}
            {this.state.pageViews[3].inView && <>Connect</>}
          </div>
        )}
        <Menu
          visible={this.state.menuVisible}
          closeMenu={this.closeMenu}
          pageViews={this.state.pageViews}
          changePageView={this.changePageView}
        />
        <div
          className={styles.pageViewContainer}
          key={"pageViewContainer" + JSON.stringify(this.state.pageViews)}
          id="pageViewContainer"
        >
          {this.state.pageViews[0].inView && (
            <AboutMe changePageView={this.changePageView} />
          )}
          {this.state.pageViews[1].inView && <Projects />}
          {this.state.pageViews[2].inView && <Resume />}
          {this.state.pageViews[3].inView && <Connect />}
        </div>
      </div>
    );
  }
}
