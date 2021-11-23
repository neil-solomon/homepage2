import React from "react";
import styles from "./BackgroundAnimations.module.css";

export default class BackgroundAnimations extends React.Component {
  render() {
    return (
      <div className={styles.backgroundAnimations}>
        <div className={styles.backgroundAnimation1}></div>
        <div className={styles.backgroundAnimation2}></div>
        <div className={styles.backgroundAnimation3}></div>
        <div className={styles.backgroundAnimation4}></div>
        <div className={styles.backgroundAnimation5}></div>
        <div className={styles.backgroundAnimation6}></div>
        <div className={styles.backgroundAnimation7}></div>
        <div className={styles.backgroundAnimation8}></div>
      </div>
    );
  }
}
