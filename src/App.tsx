import WelcomePage from "./components/welcome-page";
import githubSVG from "./assets/github.svg";
import linkedInSVG from "./assets/linkedin.svg";

function App() {
  return (
    <>
      <WelcomePage displayedText="Kevin Terry [Software Engineer]" />
      <div className="side-links-container">
        <img className="link" src={githubSVG} />
        <img className="link" src={linkedInSVG} />
      </div>
    </>
  );
}

export default App;
