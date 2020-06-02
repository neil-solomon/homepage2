import React from "react";
import styles from "./Connect.module.css";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export default class Connect extends React.Component {
  componentDidMount = () => {
    this.emailIcon = document.getElementById("emailIcon");
    this.emailIcon.classList.add(styles.icon);
    this.emailIcon.classList.add(styles.iconHoverOut);
    this.emailEntranceTimeout = setTimeout(() => {
      this.emailIcon.classList.add(styles.iconEntrance);
    }, 500);

    this.linkedinIcon = document.getElementById("linkedinIcon");
    this.linkedinIcon.classList.add(styles.icon);
    this.linkedinIcon.classList.add(styles.iconHoverOut);
    this.linkedinEntranceTimeout = setTimeout(() => {
      this.linkedinIcon.classList.add(styles.iconEntrance);
    }, 1000);

    this.githubIcon = document.getElementById("githubIcon");
    this.githubIcon.classList.add(styles.icon);
    this.githubIcon.classList.add(styles.iconHoverOut);
    this.githubEntranceTimeout = setTimeout(() => {
      this.githubIcon.classList.add(styles.iconEntrance);
    }, 1500);
  };

  componentWillUnmount = () => {
    clearTimeout(this.emailEntranceTimeout);
    clearTimeout(this.linkedinEntranceTimeout);
    clearTimeout(this.githubEntranceTimeout);
  };

  hoverIn = (index) => {
    console.log(index);
    switch (index) {
      case 0:
        this.emailIcon.classList.remove(styles.iconHoverOut);
        this.emailIcon.classList.add(styles.iconHoverIn);
        break;
      case 1:
        this.linkedinIcon.classList.remove(styles.iconHoverOut);
        this.linkedinIcon.classList.add(styles.iconHoverIn);
        break;
      case 2:
        this.githubIcon.classList.remove(styles.iconHoverOut);
        this.githubIcon.classList.add(styles.iconHoverIn);
        break;
      default:
        break;
    }
  };

  hoverOut = (index) => {
    console.log(index);
    switch (index) {
      case 0:
        this.emailIcon.classList.remove(styles.iconHoverIn);
        this.emailIcon.classList.add(styles.iconHoverOut);
        break;
      case 1:
        this.linkedinIcon.classList.remove(styles.iconHoverIn);
        this.linkedinIcon.classList.add(styles.iconHoverOut);
        break;
      case 2:
        this.githubIcon.classList.remove(styles.iconHoverIn);
        this.githubIcon.classList.add(styles.iconHoverOut);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <div className={styles.message}>
          Please shoot me an email and connect with me on LinkedIn! Also, check
          out the source code for all of my projects on Github.
        </div>
        <div className={styles.icons}>
          <div
            id="emailIcon"
            style={{ left: 1 * (Math.min(600, 0.9 * window.innerWidth) / 7) }}
          >
            <a href="mailto:neilsolomon89@gmail.com">
              <MailOutlined
                onMouseEnter={() => this.hoverIn(0)}
                onMouseLeave={() => this.hoverOut(0)}
              />
            </a>
          </div>
          <div
            id="linkedinIcon"
            style={{ left: 3 * (Math.min(600, 0.9 * window.innerWidth) / 7) }}
          >
            <a href="https://www.linkedin.com/in/neil-solomon/" target="blank">
              <LinkedinOutlined
                onMouseEnter={() => this.hoverIn(1)}
                onMouseLeave={() => this.hoverOut(1)}
              />
            </a>
          </div>
          <div
            id="githubIcon"
            style={{ left: 5 * (Math.min(600, 0.9 * window.innerWidth) / 7) }}
          >
            <a href="https://github.com/neil-solomon" target="blank">
              <GithubOutlined
                onMouseEnter={() => this.hoverIn(2)}
                onMouseLeave={() => this.hoverOut(2)}
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}
