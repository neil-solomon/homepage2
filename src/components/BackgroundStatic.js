import React from "react";
import styles from "./BackgroundStatic.module.css";

export default class BackgroundStatic extends React.Component{
    render(){
        return(
            <div className={styles.backgroundElements}>
                <div className={styles.backgroundElement1}></div>
                <div className={styles.backgroundElement2}></div>
                <div className={styles.backgroundElement3}></div>
                <div className={styles.backgroundElement4}></div>
                <div className={styles.backgroundElement5}></div>
                <div className={styles.backgroundElement6}></div>
                <div className={styles.backgroundElement7}></div>
                {/* <div className={styles.backgroundElement8}></div> */}
            </div>
        );
    }
}