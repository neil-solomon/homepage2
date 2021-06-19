import React from "react";
import styles from "./MenuItem.module.css";

export default class MenuItem extends React.Component {
  componentDidMount = () => {
    this.menuItem = document.getElementById("menuItem" + this.props.name);
    this.menuItem.classList.add(styles.menuItem);
    this.menuItem.classList.add(styles.menuItem_notVisible);
    this.underline = document.getElementById(
      "menuItem" + this.props.name + "Underline"
    );
    this.underline.classList.add(styles.underline);
    this.underline.classList.add(styles.underline_hide);
  };

  componentWillUnmount = () => {
    clearTimeout(this.enterTimeout);
    clearTimeout(this.exitTimeout1);
    clearTimeout(this.exitTimeout2);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.menuVisible && !prevProps.menuVisible) {
      this.menuItem.classList.remove(styles.menuItem_visible);
      this.menuItem.classList.add(styles.menuItem_notVisible);
      this.enterTimeout = setTimeout(() => {
        this.menuItem.classList.remove(styles.menuItem_notVisible);
        this.menuItem.classList.add(styles.menuItem_visible);
      }, 250 + 100 * this.props.index);
    } else if (!this.props.menuVisible && prevProps.menuVisible) {
      this.menuItem.classList.remove(styles.menuItem_visible);
      this.menuItem.classList.add(styles.menuItem_notVisible);
    }
  };

  menuItemClick = () => {
    this.underline.classList.add(styles.underline_animate);
    this.exitTimeout1 = setTimeout(() => {
      this.props.changePageView(this.props.index);
    }, 500);
    this.exitTimeout2 = setTimeout(() => {
      this.underline.classList.remove(styles.underline_animate);
      this.underline.classList.remove(styles.underline_show);
      this.underline.classList.add(styles.underline_hide);
    }, 1000);
  };

  menuItemHoverIn = () => {
    this.underline.classList.remove(styles.underline_hide);
    this.underline.classList.add(styles.underline_show);
  };

  menuItemHoverOut = () => {
    this.underline.classList.remove(styles.underline_show);
    this.underline.classList.add(styles.underline_hide);
  };

  render() {
    return (
      <div
        id={"menuItem" + this.props.name}
        onClick={this.menuItemClick}
        onMouseEnter={this.menuItemHoverIn}
        onMouseLeave={this.menuItemHoverOut}
      >
        {this.props.name}
        <div id={"menuItem" + this.props.name + "Underline"} />
      </div>
    );
  }
}
