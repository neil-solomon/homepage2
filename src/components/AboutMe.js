import React from "react";
import styles from "./AboutMe.module.css";
import headshot from ".././media/wedding1crop2.jpg";

export default class AboutMe extends React.Component {
  componentDidMount = () => {
    this.headshot = document.getElementById("AboutMe_headshot");
    this.headshot.classList.add(styles.headshot);
    this.headshot.classList.add(styles.headshotHide);

    this.container = document.getElementById("AboutMe_container");
  };

  componentWillUnmount = () => {
    clearTimeout(this.fadeOutTimeout);
    clearTimeout(this.resetContainerClassTimeout);
  };

  showHeadshot = () => {
    this.headshot.classList.remove(styles.headshotHide);
    this.headshot.classList.add(styles.headshotShow);
  };

  changePageView = (pageIndex) => {
    this.container.classList.add(styles.fadeOut);
    this.fadeOutTimeout = setTimeout(() => {
      this.props.changePageView(pageIndex);
    }, 250);
    this.resetContainerClassTimeout = setTimeout(() => {
      this.container.classList.remove(styles.fadeOut);
    }, 500);
  };

  render() {
    return (
      <div id="AboutMe_container">
        <div style={{ height: 300 }}>
          <img
            id="AboutMe_headshot"
            src={headshot}
            onLoad={this.showHeadshot}
            alt="headshot"
          />
        </div>
        <div className={styles.message}>
          <div style={{ marginBottom: 15 }}>Hello!</div>
          <div>
            I am Neil Solomon, a student majoring in Computer Engineering and
            working in software development in New York City. Most of my
            experience has been with web development using React and Django, and
            I also have programming experience with C++, C, and Java. When I'm
            not busy studying or working I love building beautiful, interactive
            web applications and enhancing my algorithmic problem-solving skiils
            on sites like LeetCode and HackRank. Please check out examples of
            some of my{" "}
            <span
              onClick={() => this.changePageView(1)}
              className={styles.link}
            >
              Projects
            </span>
            , take a look at my{" "}
            <span
              onClick={() => this.changePageView(2)}
              className={styles.link}
            >
              Resume
            </span>
            , and{" "}
            <span
              onClick={() => this.changePageView(3)}
              className={styles.link}
            >
              Connect
            </span>{" "}
            with me online.
          </div>
          <div style={{ marginTop: 15 }}>Thanks for visiting!</div>
        </div>
      </div>
    );
  }
}
