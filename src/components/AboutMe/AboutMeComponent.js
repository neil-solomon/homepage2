import React from "react";
import headshot from "../../media/wedding1crop2.jpg";
import styles from "./AboutMe.module.css";

export default class AboutMeComponent extends React.Component {
  state = {
    headshotLoaded: false,
  };

  updateHeadshotLoaded = () => {
    this.setState({ headshotLoaded: true });
  };

  render() {
    return (
      <>
        <div style={{ height: 300 }}>
          <img
            src={headshot}
            className={
              styles.headshot +
              " " +
              (this.state.headshotLoaded
                ? styles.headshotShow
                : styles.headshotHide)
            }
            onLoad={this.updateHeadshotLoaded}
            alt="headshot"
          />
        </div>
        <div className={styles.message}>
          <div style={{ marginBottom: 15 }}>Hello!</div>
          <div>
            I am Neil Solomon, a software engineer at Bloomberg LP with a BE in
            Computer Engineering from The City College of New York. Most of my
            experience has been with web development using React and Django, and
            I also have programming experience with C++, C, and Java. When I'm
            not busy working I love learning new things by building beautiful,
            interactive web applications and solving complex algorithmic
            problems.
          </div>
          <div style={{ marginTop: 15 }}>
            Please shoot me an email and connect with me on LinkedIn! Also,
            check out the source code for all of my projects on Github.
          </div>
        </div>
      </>
    );
  }
}
