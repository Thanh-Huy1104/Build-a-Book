import React from "react";
import "./Footer.css";
import githubLogo from "../../assets/github_icon.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="githubicon">
        <a
          className="githubicon-a"
          href="https://github.com/Thanh-Huy1104/Build-a-Book/blob/main/README.md"
          target="_blank"
        >
          <img src={githubLogo} title="GitHub Repo" alt="GitHub Repo" />
        </a>
      </div>
      <p className="Footer_title">&copy; Ctrl Freaks</p>
      <div className="teamnames">
        <p>Thanh-Huy Nguyen</p>
        <p>Jason Rustom</p>
        <p>Anne-Marie Nguyen</p>
        <p>Hugo Vaillant</p>
      </div>
      {/* <ul className="Footer_list">
        <li>Thanh-Huy Nguyen</li>
        <li>Jason Rustom</li>
        <li>Anne-Marie Nguyen</li>
        <li>Hugo Vaillant</li>
      </ul> */}
    </footer>
  );
};

export default Footer;
