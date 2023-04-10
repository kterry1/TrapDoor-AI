import "./side-links.css";
import githubSVG from "../../assets/github.svg";
import linkedInSVG from "../../assets/linkedin.svg";

const SideLinks = (): JSX.Element => {
  return (
    <div className="side-links-container">
      <img className="link" alt="external github link" src={githubSVG} />
      <img className="link" alt="external linkedIn link" src={linkedInSVG} />
    </div>
  );
};

export default SideLinks;
