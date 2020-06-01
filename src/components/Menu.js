import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.overlay = document.getElementById("Menu_overlay");
    this.overlay.classList.add(styles.overlay);
    this.overlay.classList.add(styles.overlay_close);
    this.sidebar = document.getElementById("Menu_sidebar");
    this.sidebar.classList.add(styles.sidebar);
    this.sidebar.classList.add(styles.sidebar_close);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.visible) {
      this.overlay.classList.remove(styles.overlay_close);
      this.overlay.classList.add(styles.overlay_open);
      this.sidebar.classList.remove(styles.sidebar_close);
      this.sidebar.classList.add(styles.sidebar_open);
    } else {
      this.overlay.classList.remove(styles.overlay_open);
      this.overlay.classList.add(styles.overlay_close);
      this.sidebar.classList.remove(styles.sidebar_open);
      this.sidebar.classList.add(styles.sidebar_close);
    }
  };

  render() {
    return (
      <>
        <div id="Menu_overlay" onClick={this.props.closeMenu}></div>
        <div id="Menu_sidebar">
          <div style={{ height: 100 }} />
          {this.props.pageViews.map((menuItem, index) => (
            <MenuItem
              key={menuItem.name + index}
              name={menuItem.name}
              index={index}
              menuVisible={this.props.visible}
              changePageView={this.props.changePageView}
            />
          ))}
          <div
            key={"sidebarFooter" + this.props.visible}
            className={styles.footer}
          >
            &copy;2020 Neil Solomon
          </div>
        </div>
      </>
    );
  }
}
