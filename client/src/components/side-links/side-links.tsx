import "./side-links.css";
import githubSVG from "../../assets/github.svg";
import linkedInSVG from "../../assets/linkedin.svg";

const SideLinks = (): JSX.Element => {
  return (
    <div className="side-links-container">
      <a href="https://github.com/kterry1">
        <img className="link" alt="external github link" src={githubSVG} />
      </a>
      <a href="https://www.linkedin.com/in/kevin-terry-engineer">
        <img className="link" alt="external linkedIn link" src={linkedInSVG} />
      </a>
    </div>
  );
};

export default SideLinks;
