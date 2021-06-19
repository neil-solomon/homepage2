import React from "react";
import styles from "./Connect.module.css";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export default class ConnectComponent extends React.Component {
  render() {
    return (
      <div>
        <a href="mailto:neilsolomon89@gmail.com">
          <MailOutlined />
        </a>
        <a href="https://www.linkedin.com/in/neil-solomon/" target="blank">
          <LinkedinOutlined />
        </a>

        <a href="https://github.com/neil-solomon" target="blank">
          <GithubOutlined />
        </a>
      </div>
    );
  }
}
