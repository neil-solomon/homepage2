import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./Resume.module.css";
import resumePdf from "../.././media/NeilSolomon_resume_Aug2020.pdf";
import { isInViewport } from "../utils";

export default class ResumeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.download = null;
    this.education = null;
    this.expertise = null;
    this.experience = null;
    this.affiliations = null;

    this.downloadTimeout = null;
    this.educationTimeout = null;
    this.expertiseTimeout = null;
    this.experienceTimeout = null;
    this.affiliationsTimeout = null;
  }

  componentDidMount = () => {
    this.setupSections();
    this.checkViewport();
  };

  componentDidUpdate = () => {
    this.checkViewport();
  };

  componentWillUnmount = () => {
    clearTimeout(this.downloadTimeout);
    clearTimeout(this.educationTimeout);
    clearTimeout(this.expertiseTimeout);
    clearTimeout(this.experienceTimeout);
    clearTimeout(this.affiliationsTimeout);
  };

  setupSections = () => {
    this.download = document.getElementById("Resume_download");
    // this.download.classList.add(styles.download);
    // this.download.classList.add(styles.resumeBlock_invisible);

    this.education = document.getElementById("Resume_education");
    // this.education.classList.add(styles.resumeBlock);
    // this.education.classList.add(styles.resumeBlock_invisible);

    this.expertise = document.getElementById("Resume_expertise");
    // this.expertise.classList.add(styles.resumeBlock);
    // this.expertise.classList.add(styles.resumeBlock_invisible);

    this.experience = document.getElementById("Resume_experience");
    // this.experience.classList.add(styles.resumeBlock);
    // this.experience.classList.add(styles.resumeBlock_invisible);

    this.affiliations = document.getElementById("Resume_affiliations");
    // this.affiliations.classList.add(styles.resumeBlock);
    // this.affiliations.classList.add(styles.resumeBlock_invisible);
  };

  checkViewport = () => {
    let delay = 0;
    const increment = 500;

    if (
      // this.download.classList["1"] === styles.resumeBlock_invisible &&
      isInViewport("Resume_download")
    ) {
      this.downloadTimeout = setTimeout(() => {
        // this.download.classList.remove(styles.resumeBlock_invisible);
        this.download.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += increment;
    }

    if (
      // this.experience.classList["1"] === styles.resumeBlock_invisible &&
      isInViewport("Resume_experience")
    ) {
      this.experienceTimeout = setTimeout(() => {
        // this.experience.classList.remove(styles.resumeBlock_invisible);
        this.experience.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += increment;
    }

    if (
      // this.education.classList["1"] === styles.resumeBlock_invisible &&
      isInViewport("Resume_education")
    ) {
      this.educationTimeout = setTimeout(() => {
        // this.education.classList.remove(styles.resumeBlock_invisible);
        this.education.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += increment;
    }

    if (
      // this.expertise.classList["1"] === styles.resumeBlock_invisible &&
      isInViewport("Resume_expertise")
    ) {
      this.expertiseTimeout = setTimeout(() => {
        // this.expertise.classList.remove(styles.resumeBlock_invisible);
        this.expertise.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += increment;
    }

    if (
      // this.affiliations.classList["1"] === styles.resumeBlock_invisible &&
      isInViewport("Resume_affiliations")
    ) {
      this.affiliationsTimeout = setTimeout(() => {
        // this.affiliations.classList.remove(styles.resumeBlock_invisible);
        this.affiliations.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += increment;
    }
  };

  downloadResume = () => {
    var link = document.createElement("a");
    link.setAttribute("href", resumePdf);
    link.setAttribute("download", "NeilSolomon_resume_Aug2020");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <>
        <div
          onClick={this.downloadResume}
          id="Resume_download"
          className={styles.download}
        >
          Download PDF <DownloadOutlined />
        </div>
        <div id="Resume_experience" className={styles.resumeBlock}>
          {/* <div className={styles.divider} style={{ marginTop: 50 }}></div> */}
          <div className={styles.heading} style={{ marginTop: 50 }}>
            EXPERIENCE
          </div>
          <br></br>
          <div>
            <strong>Bloomberg LP</strong>
          </div>
          <div>Software Engineer: June 2021 - Present</div>
          <br></br>
          <div>
            <strong>GAL Manufacturing, LLC</strong>
          </div>
          <div>R&amp;D Software Technician: August 2019 - April 2021</div>
          <ul style={{ marginLeft: -50 }}>
            <li>
              Developed the new Galileo web app which displays real-time data
              from the GAL elevator controller and facilitates easy set-up and
              diagnostics of an elevator system.
            </li>
            <li>
              Utilized React to create a responsive, intuitive, and
              fast-rendering UI for the Galileo web app.
            </li>
            <li>
              Created custom UI components and implemented efficient data
              parsing algorithms to improve the rendering speed of the Galileo
              web app by 200%.
            </li>
            <li>
              Implemented Django framework to provide a robust database for the
              Galileo web app, as well as a custom API to securely transfer data
              to and from the GAL elevator controller.
            </li>
            <li>
              Built a desktop app using PyQt which allows users to easily set-up
              and troubleshoot their Galileo web app installation.
            </li>
          </ul>
          <br></br>
          <div>
            <strong>GAL Manufacturing, LLC</strong>
          </div>
          <div>R&amp;D Software Intern: June 2019 - August 2019</div>
          <ul style={{ marginLeft: -50 }}>
            <li>
              Developed and presented a prototype of the new GALileo web app to
              company executives, showcasing live communication between the app
              and the GALaxy elevator controller.
            </li>
            <li>
              Assisted in documentation of software team processes including
              GALaxy simulator set-up and testing, and software version control.
            </li>
          </ul>
          {/* <div className={styles.divider}></div> */}
        </div>
        <div
          id="Resume_education"
          style={{ marginTop: 50 }}
          className={styles.resumeBlock}
        >
          <div className={styles.heading}>EDUCATION</div>
          <br></br>
          <div>
            <strong>The City College of New York</strong>
          </div>
          <div>Bachelors of Engineering, Computer Engineering: June 2021.</div>
          <table align="center">
            <tbody>
              <tr>
                <td style={{ width: 400 }}>
                  <ul style={{ marginLeft: -25 }}>
                    <li>Data Structures</li>
                    <li>Intro to Computing (C++)</li>
                    <li>Programming for EE (C++)</li>
                    <li>Operating Systems</li>
                    <li>Discrete Mathematics</li>
                    <li>Calculus I, II, III, &amp; IV</li>
                    <li>Analysis (MATLAB)</li>
                  </ul>
                </td>
                <td style={{ width: 400 }}>
                  <ul style={{ marginLeft: -25 }}>
                    <li>Algorithms</li>
                    <li>C++ for Engineers</li>
                    <li>Software Design (Java)</li>
                    <li>Assembly Language</li>
                    <li>Linear Algebra</li>
                    <li>Intro to Probability</li>
                    <li>Integrated Circuit Design</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <div>
            <strong>CodePath</strong>
          </div>
          <div>Advanced Software Engineering: Summer 2020.</div>
          <ul style={{ marginLeft: -25 }}>
            <li>
              Selected for a competitive 12-week course taught by software
              industry professionals covering the use of data structures and
              algorithm design techniques to solve challenging algorithmic
              questions.
            </li>
          </ul>
          {/* <div className={styles.divider}></div> */}
        </div>
        <div id="Resume_expertise" className={styles.resumeBlock}>
          <div className={styles.heading}>EXPERTISE</div>
          <br></br>
          <div>
            <strong>Programming Languages</strong>
          </div>
          <div>
            Proficient in Python, Javascript, HTML, CSS, and C++. Familiar with
            Java, C, Bash, SQL, and MATLAB.
          </div>
          <br></br>
          <div>
            <strong>Technical Skills</strong>
          </div>
          <div>React, Django, PyQt, and Git.</div>
          {/* <div className={styles.divider}></div> */}
        </div>
        <div
          id="Resume_affiliations"
          style={{ marginBottom: 100 }}
          className={styles.resumeBlock}
        >
          <div className={styles.heading}>AFFILIATIONS</div>
          <br></br>
          <div>
            <strong>National Society of Black Engineers</strong>
          </div>
          <div>Member, 2017 - Present</div>
          {/* <div className={styles.divider}></div> */}
        </div>
      </>
    );
  }
}
