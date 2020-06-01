import React from "react";
import styles from "./AboutMe.module.css";
import headshot from ".././media/wedding1crop2.jpg";

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.headshot = document.getElementById("AboutMe_headshot");
    this.headshot.classList.add(styles.headshot);
    this.headshot.classList.add(styles.headshotHide);
  };

  showHeadshot = () => {
    this.headshot.classList.remove(styles.headshotHide);
    this.headshot.classList.add(styles.headshotShow);
  };

  render() {
    return (
      <>
        <img
          id="AboutMe_headshot"
          src={headshot}
          onLoad={this.showHeadshot}
        ></img>
        <div className={styles.message}>
          <p>Hello!</p>
          <p>
            I am a student majoring in Computer Engineering and working
            part-time in software development. I have experience with C++,
            Python, and Javascript and I love creating interactive web pages
            using React. Check out my portfolio for examples of my projects!
          </p>
        </div>
      </>
    );
  }
}
