import React from "react";
import styles from "./Connect.module.css";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { isInViewport } from "../utils";

export default class ConnectComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.emailIcon = null;
    this.linkedinIcon = null;
    this.githubIcon = null;

    this.emailEntranceTimeout = null;
    this.linkedinEntranceTimeout = null;
    this.githubEntranceTimeout = null;
  }

  componentDidMount = () => {
    this.setupIcons();
    this.checkViewport();
  };

  componentDidUpdate = (prevProps, prevState) => {
    this.checkViewport();
  };

  componentWillUnmount = () => {
    clearTimeout(this.emailEntranceTimeout);
    clearTimeout(this.linkedinEntranceTimeout);
    clearTimeout(this.githubEntranceTimeout);
  };

  setupIcons = () => {
    this.emailIcon = document.getElementById("emailIcon");
    this.emailIcon.classList.add(styles.icon);
    this.emailIcon.classList.add(styles.iconHoverOut);

    this.linkedinIcon = document.getElementById("linkedinIcon");
    this.linkedinIcon.classList.add(styles.icon);
    this.linkedinIcon.classList.add(styles.iconHoverOut);

    this.githubIcon = document.getElementById("githubIcon");
    this.githubIcon.classList.add(styles.icon);
    this.githubIcon.classList.add(styles.iconHoverOut);
  };

  checkViewport = () => {
    if (isInViewport("ConnectComponent")) {
      this.iconsEntrance();
    } else {
      this.iconsExit();
    }
  };

  iconsEntrance = () => {
    this.emailIcon.classList.remove(styles.iconExit);
    this.linkedinIcon.classList.remove(styles.iconExit);
    this.githubIcon.classList.remove(styles.iconExit);

    this.emailEntranceTimeout = setTimeout(() => {
      this.emailIcon.classList.add(styles.iconEntrance);
    }, 250);

    this.linkedinEntranceTimeout = setTimeout(() => {
      this.linkedinIcon.classList.add(styles.iconEntrance);
    }, 500);

    this.githubEntranceTimeout = setTimeout(() => {
      this.githubIcon.classList.add(styles.iconEntrance);
    }, 750);
  };

  iconsExit = () => {
    this.emailIcon.classList.remove(styles.iconEntrance);
    this.emailIcon.classList.add(styles.iconExit);
    this.linkedinIcon.classList.remove(styles.iconEntrance);
    this.linkedinIcon.classList.add(styles.iconExit);
    this.githubIcon.classList.remove(styles.iconEntrance);
    this.githubIcon.classList.add(styles.iconExit);
  };

  hoverIn = (index) => {
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
      <div className={styles.icons} id="ConnectComponent">
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
    );
  }
}
