import React from "react";
import styles from "./Projects.module.css";
import ticTacGrowImage from ".././media/ticTacGrow.jpg";
import virtualBankImage from ".././media/virtualBank.jpg";
import riskDiceRollerImage from ".././media/riskDiceRoller.jpg";
import scoreboardImage from ".././media/scoreboard.jpg";
import youtubePlaylistImage from ".././media/youtubePlaylist.png";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.projectTimeouts = [];
    this.projects = [
      {
        name: "Tic-Tac-Grow",
        description:
          "Original game Tic-Tac-Grow adds an exciting twist to the classic game by randomly adding a new cell to the board after each player takes their turn. Choose how many X's or O's in a row it takes to win and how big you want the board to grow.",
        image: ticTacGrowImage,
        url: "https://neil-solomon.github.io/score_keeper/#/TicTacGrow",
      },
      {
        name: "Scoreboard",
        description:
          "An interactive scoreboard for keeping score during your favorite games. Featuring colorful icons for each player and a live chart of scoring progression. Turn score-keeping from a tedious chore to a fun and exciting part of game night!",
        image: scoreboardImage,
        url: "https://neil-solomon.github.io/score_keeper/#/Scoreboard",
      },
      {
        name: "Virtual Bank",
        description:
          "Use the Virtual Bank to keep track of all of the money for all of the players in your game. Whether you have lost your Monopoly money or run out of Poker chips, the Virtual Bank makes it so you never have to make change or do math again!",
        image: virtualBankImage,
        url: "https://neil-solomon.github.io/score_keeper/#/VirtualBank",
      },
      //  API key cancelled due to inactivity
      // {
      //   name: "YouTube Playlist",
      //   description:
      //     "An attractive playlist for YouTube videos utilizing the YouTube Data API.",
      //   image: youtubePlaylistImage,
      //   url: "https://neil-solomon.github.io/csc212-music-playlist/",
      // },
      {
        name: "Risk Dice Roller",
        description:
          "The Risk Dice Roller will save you from rolling dice for hours on end. Featuring win probabilites calculated by running 1,000's of simulations, a live chart of the state of the armies as the battle progresses, and a uniform distribution of dice roll probabilities.",
        image: riskDiceRollerImage,
        url: "https://neil-solomon.github.io/score_keeper/#/RiskDiceRoller",
      },
    ];
  }

  componentDidMount = () => {
    this.projectElements = [];
    this.projectImageElements = [];
    for (const project of this.projects) {
      this.projectElements.push(
        document.getElementById("project_" + project.name)
      );
      this.projectElements[this.projectElements.length - 1].classList.add(
        styles.project
      );
      this.projectElements[this.projectElements.length - 1].classList.add(
        styles.project_invisible
      );
      this.projectImageElements.push(
        document.getElementById("image_" + project.name)
      );
      this.projectImageElements[
        this.projectImageElements.length - 1
      ].classList.add(styles.image);
      this.projectImageElements[
        this.projectImageElements.length - 1
      ].classList.add(styles.image_invisible);
    }

    document
      .getElementById("pageViewContainer")
      .addEventListener("scroll", () => this.updateElementsInView());

    this.updateElementsInView();
  };

  componentWillUnmount = () => {
    document
      .getElementById("pageViewContainer")
      .removeEventListener("scroll", () => this.updateElementsInView());
    for (const projectTimeout in this.projectTimeouts) {
      clearTimeout(projectTimeout);
    }
  };

  updateElementsInView = () => {
    var delay = 0;
    for (const project of this.projectElements) {
      if (
        project.classList["1"] === styles.project_invisible &&
        project.getBoundingClientRect().top < 0.85 * window.innerHeight
      ) {
        this.projectTimeouts.push(
          setTimeout(() => {
            project.classList.remove(styles.project_invisible);
            project.classList.add(styles.project_visible);
          }, delay)
        );
        delay += 1000;
      }
    }
  };

  makeImageVisible = (index) => {
    this.projectImageElements[index].classList.remove(styles.image_invisible);
    this.projectImageElements[index].classList.add(styles.image_visible);
  };

  render() {
    return (
      <>
        {this.projects.map((project, index) => (
          <div key={"project_" + project.name} id={"project_" + project.name}>
            <a href={project.url} target="blank">
              <div className={styles.image_container}>
                <img
                  id={"image_" + project.name}
                  onLoad={() => this.makeImageVisible(index)}
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </a>
            <a href={project.url} target="blank">
              <div className={styles.name}>{project.name}</div>
            </a>
            <div className={styles.description}>{project.description}</div>
          </div>
        ))}
      </>
    );
  }
}
