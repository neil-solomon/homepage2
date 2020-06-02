import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./Resume.module.css";
import resumePdf from ".././media/NeilSolomon_resume_June2020.pdf";

export default class Resume extends React.Component {
  componentDidMount = () => {
    this.education = document.getElementById("Resume_education");
    this.education.classList.add(styles.resumeBlock);
    this.education.classList.add(styles.resumeBlock_invisible);

    this.coursework = document.getElementById("Resume_coursework");
    this.coursework.classList.add(styles.resumeBlock);
    this.coursework.classList.add(styles.resumeBlock_invisible);

    this.qualifications = document.getElementById("Resume_qualifications");
    this.qualifications.classList.add(styles.resumeBlock);
    this.qualifications.classList.add(styles.resumeBlock_invisible);

    this.experience = document.getElementById("Resume_experience");
    this.experience.classList.add(styles.resumeBlock);
    this.experience.classList.add(styles.resumeBlock_invisible);

    this.affiliations = document.getElementById("Resume_affiliations");
    this.affiliations.classList.add(styles.resumeBlock);
    this.affiliations.classList.add(styles.resumeBlock_invisible);

    document
      .getElementById("pageViewContainer")
      .addEventListener("scroll", () => this.updateElementsInView());

    this.updateElementsInView();
  };

  componentWillUnmount = () => {
    document
      .getElementById("pageViewContainer")
      .removeEventListener("scroll", () => this.updateElementsInView());
    clearTimeout(this.educationTimeout);
    clearTimeout(this.courseworkTimeout);
    clearTimeout(this.qualificationsTimeout);
    clearTimeout(this.experienceTimeout);
    clearTimeout(this.affiliationsTimeout);
  };

  updateElementsInView = () => {
    var delay = 0;
    if (
      this.education.classList["1"] === styles.resumeBlock_invisible &&
      this.education.getBoundingClientRect().top < 0.8 * window.innerHeight
    ) {
      this.educationTimeout = setTimeout(() => {
        this.education.classList.remove(styles.resumeBlock_invisible);
        this.education.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += 1000;
    }

    if (
      this.coursework.classList["1"] === styles.resumeBlock_invisible &&
      this.coursework.getBoundingClientRect().top < 0.8 * window.innerHeight
    ) {
      this.courseworkTimeout = setTimeout(() => {
        this.coursework.classList.remove(styles.resumeBlock_invisible);
        this.coursework.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += 1000;
    }

    if (
      this.qualifications.classList["1"] === styles.resumeBlock_invisible &&
      this.qualifications.getBoundingClientRect().top < 0.8 * window.innerHeight
    ) {
      this.qualificationsTimeout = setTimeout(() => {
        this.qualifications.classList.remove(styles.resumeBlock_invisible);
        this.qualifications.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += 1000;
    }

    if (
      this.experience.classList["1"] === styles.resumeBlock_invisible &&
      this.experience.getBoundingClientRect().top < 0.8 * window.innerHeight
    ) {
      this.experienceTimeout = setTimeout(() => {
        this.experience.classList.remove(styles.resumeBlock_invisible);
        this.experience.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += 1000;
    }

    if (
      this.affiliations.classList["1"] === styles.resumeBlock_invisible &&
      this.affiliations.getBoundingClientRect().top < 0.8 * window.innerHeight
    ) {
      this.affiliationsTimeout = setTimeout(() => {
        this.affiliations.classList.remove(styles.resumeBlock_invisible);
        this.affiliations.classList.add(styles.resumeBlock_visible);
      }, delay);
      delay += 1000;
    }
  };

  downloadResume = () => {
    var link = document.createElement("a");
    link.setAttribute("href", resumePdf);
    link.setAttribute("download", "NeilSolomon_resume_June2020");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <>
        <div className={styles.download} onClick={this.downloadResume}>
          Download PDF <DownloadOutlined />
        </div>
        <div id="Resume_education" style={{ marginTop: 50 }}>
          <div className={styles.heading}>EDUCATION</div>
          <br></br>
          <div>
            <strong>City College of the City University of New York</strong>
          </div>
          <div>Bachelors of Engineering, Computer Engineering: June 2021.</div>
          <br></br>
          <div>
            <strong>
              LaGuardia Community College of the City University of New York
            </strong>
          </div>
          <div> Associate in Science, Electrical Engineering: June 2018.</div>
          <div className={styles.divider}></div>
        </div>
        <div id="Resume_coursework">
          <div className={styles.heading}>COURSEWORK</div>
          <br></br>
          <div>
            <strong>Completed</strong>
            <table align="center">
              <tbody>
                <tr>
                  <td style={{ width: 250, height: 0 }}></td>
                  <td style={{ width: 250, height: 0 }}></td>
                </tr>
                <tr>
                  <td>Data Structures</td>
                  <td>Introduction to C++</td>
                </tr>
                <tr>
                  <td>C++ for Engineers</td>
                  <td>Programming for EE (C++)</td>
                </tr>
                <tr>
                  <td>Assembly Programming</td>
                  <td>Discrete Mathematics</td>
                </tr>
                <tr>
                  <td>Linear Algebra</td>
                  <td>Calculus I, II, III</td>
                </tr>
                <tr>
                  <td>Digital Integrated Circuits</td>
                  <td>Computer Aided Analysis (MATLAB)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div>
            <strong>In Progress</strong>
            <table align="center">
              <tbody>
                <tr>
                  <td style={{ width: 250, height: 0 }}></td>
                  <td style={{ width: 250, height: 0 }}></td>
                </tr>
                <tr>
                  <td>Algorithms</td>
                  <td>Operating Systems</td>
                </tr>
                <tr>
                  <td>Software Design</td>
                  <td>Linear Systems Analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div id="Resume_qualifications">
          <div className={styles.heading}>QUALIFICATIONS</div>
          <br></br>
          <div>
            <strong>Programming Languages</strong>
          </div>
          <div>
            Proficient in C++, Python, and JavaScript. Basic experience with
            MATLAB, Bash, and SQL.
          </div>
          <br></br>
          <div>
            <strong>Technical Skills</strong>
          </div>
          <div>React, Django, and Git.</div>
          <div className={styles.divider}></div>
        </div>
        <div id="Resume_experience">
          <div className={styles.heading}>EXPERIENCE</div>
          <br></br>
          <div>
            <strong>GAL Manufacturing, LLC</strong>
          </div>
          <div>
            <i>R&amp;D Software Technician, August 2019 - Present</i>
          </div>
          <ul style={{ marginLeft: -50 }}>
            <li>
              Used React framework for development of the GALileo web app with a
              focus on displaying real-time data from the GALaxy elevator
              controller.
            </li>
            <li>
              Used Django framework to provide a robust database to transfer and
              save data from the GALaxy elevator controller to the GALileo web
              app.
            </li>
            <li>
              Applied principles of object-oriented and functional programming
              in Python and C to improve the speed and maintainability of GALaxy
              code.
            </li>
          </ul>
          <br></br>
          <div>
            <strong>GAL Manufacturing, LLC</strong>
          </div>
          <div>
            <i>R&amp;D Software Intern, June 2018 - August 2018</i>
          </div>
          <ul style={{ marginLeft: -50 }}>
            <li>
              Developed back-end code to facilitate communication between the
              GALaxy elevator controller and the new GALileo web app.
            </li>
            <li>
              Presented the new GALileo web app to company executives,
              showcasing live communication between the GALileo web app and
              GALaxy elevator controller.
            </li>
            <li>
              Assisted in documentation of software team processes including
              GALaxy simulator set-up and testing, and software version control.
            </li>
          </ul>
          <div className={styles.divider}></div>
        </div>
        <div id="Resume_affiliations" style={{ marginBottom: 300 }}>
          <div className={styles.heading}>AFFILIATIONS</div>
          <div>
            <strong>National Society of Black Engineers</strong>
          </div>
          <div>Member, 2017 - Present</div>
          <div className={styles.divider}></div>
        </div>
      </>
    );
  }
}
