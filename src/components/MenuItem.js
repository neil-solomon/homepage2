import React from "react";
import styles from "./MenuItem.module.css";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

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
    clearTimeout(this.exitTimeout);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.menuVisible && !prevProps.menuVisible) {
      this.menuItem.classList.remove(styles.menuItem_visible);
      this.menuItem.classList.add(styles.menuItem_notVisible);
      this.enterTimeout = setTimeout(() => {
        this.menuItem.classList.remove(styles.menuItem_notVisible);
        this.menuItem.classList.add(styles.menuItem_visible);
      }, 150 + 150 * this.props.index);
    } else if (!this.props.menuVisible && prevProps.menuVisible) {
      this.menuItem.classList.remove(styles.menuItem_visible);
      this.menuItem.classList.add(styles.menuItem_notVisible);
    }
  };

  menuItemClick = () => {
    this.underline.classList.add(styles.underline_animate);
    this.exitTimeout = setTimeout(() => {
      this.props.changePageView(this.props.index);
      this.underline.classList.remove(styles.underline_animate);
      this.underline.classList.remove(styles.underline_show);
      this.underline.classList.add(styles.underline_hide);
    }, 500);
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
