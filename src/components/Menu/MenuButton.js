import React from "react";
import styles from "./MenuButton.module.css";

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.line1 = document.getElementById("menuButton_line1");
    this.line1.classList.add(styles.line1);
    this.line1.classList.add(styles.line1_close);
    this.line2 = document.getElementById("menuButton_line2");
    this.line2.classList.add(styles.line2);
    this.line2.classList.add(styles.line2_close);
    this.line3 = document.getElementById("menuButton_line3");
    this.line3.classList.add(styles.line3);
    this.line3.classList.add(styles.line3_close);
  };

  componentDidUpdate = () => {
    if (this.props.menuVisible) {
      this.line1.classList.remove(styles.line1_close);
      this.line1.classList.add(styles.line1_open);
      this.line2.classList.remove(styles.line2_close);
      this.line2.classList.add(styles.line2_open);
      this.line3.classList.remove(styles.line3_close);
      this.line3.classList.add(styles.line3_open);
    } else {
      this.line1.classList.remove(styles.line1_open);
      this.line1.classList.add(styles.line1_close);
      this.line2.classList.remove(styles.line2_open);
      this.line2.classList.add(styles.line2_close);
      this.line3.classList.remove(styles.line3_open);
      this.line3.classList.add(styles.line3_close);
    }
  };

  buttonHoverIn = () => {
    if (this.props.menuVisible) {
      this.line1.classList.remove(styles.line_closeHover);
      this.line2.classList.remove(styles.line_closeHover);
      this.line3.classList.remove(styles.line_closeHover);
      this.line1.classList.add(styles.line_openHover);
      this.line2.classList.add(styles.line_openHover);
      this.line3.classList.add(styles.line_openHover);
    } else {
      this.line1.classList.remove(styles.line_openHover);
      this.line2.classList.remove(styles.line_openHover);
      this.line3.classList.remove(styles.line_openHover);
      this.line1.classList.add(styles.line_closeHover);
      this.line2.classList.add(styles.line_closeHover);
      this.line3.classList.add(styles.line_closeHover);
    }
  };

  buttonHoverOut = () => {
    if (this.props.menuVisible) {
      this.line1.classList.remove(styles.line_openHover);
      this.line2.classList.remove(styles.line_openHover);
      this.line3.classList.remove(styles.line_openHover);
    } else {
      this.line1.classList.remove(styles.line_closeHover);
      this.line2.classList.remove(styles.line_closeHover);
      this.line3.classList.remove(styles.line_closeHover);
    }
  };

  buttonClick = () => {
    this.line1.classList.remove(styles.line_openHover);
    this.line2.classList.remove(styles.line_openHover);
    this.line3.classList.remove(styles.line_openHover);
    this.line1.classList.remove(styles.line_closeHover);
    this.line2.classList.remove(styles.line_closeHover);
    this.line3.classList.remove(styles.line_closeHover);
    this.props.toggleMenu();
  };

  render() {
    return (
      <div
        className={styles.menuButton}
        onClick={this.buttonClick}
        onMouseEnter={this.buttonHoverIn}
        onMouseLeave={this.buttonHoverOut}
      >
        <div id="menuButton_line1"></div>
        <div id="menuButton_line2"></div>
        <div id="menuButton_line3"></div>
      </div>
    );
  }
}
