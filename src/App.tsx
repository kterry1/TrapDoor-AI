import { useState } from "react";
import WelcomePage from "./components/welcome-page";
import githubSVG from "./assets/github.svg";
import linkedInSVG from "./assets/linkedin.svg";
import mailSVG from "./assets/mail.svg";

function App() {
  return (
    <>
      <WelcomePage name="Kevin Terry [Software Engineer]" />
      <div className="side-links-left">
        <img className="line" src={githubSVG} />
        <img className="line" src={linkedInSVG} />
      </div>
    </>
  );
}

export default App;
