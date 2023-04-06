import "./welcome-page.css";
import AnimatedSheep from "../../assets/silly-sheep.svg";
import { useState } from "react";

interface WelcomePageProps {
  name?: string;
}

const WelcomePage = ({ name }: WelcomePageProps) => {
  const [peek, setPeek] = useState(false);
  return (
    <>
      <div className={"welcome-page-container"}>
        <div className={"welcome-page-buttons-container"}>
          <button
            className={"knock-button"}
            disabled={peek}
            onClick={() => setPeek(true)}
          >
            CLICK TO KNOCK
          </button>
          <button className={"hover-button"}>HOVER TO OPEN THE DOOR</button>
          <div className={"mystery-container"}>
            <button className={"mystery-button"}>CONTACT</button>
          </div>
        </div>
        <div className={peek ? "mouse-logo disabled" : "mouse-logo"}>
          <div className={"top-door top-door-open"}>
            <div className={"mid-text"}>{name}</div>
          </div>

          <img
            draggable={false}
            onAnimationEnd={() => setPeek(false)}
            className={peek ? `animated-sheep-peek` : `animated-sheep`}
            alt={"animated sheep"}
            src={AnimatedSheep}
          />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
