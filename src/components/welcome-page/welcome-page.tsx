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
      <div className={"welcome-page-buttons-container"}>
        <button disabled={peek} onClick={() => setPeek(true)}>
          CLICK TO KNOCK
        </button>
      </div>
      <button className={"hover-button"}>HOVER TO OPEN THE DOOR</button>
      <div className={peek ? "mouse-logo disabled" : "mouse-logo"}>
        <div className={"top-door"}>
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
      <button className={"other-works"}>CHECK OUT OTHER WORKS</button>
      {/* <h1 className={"call-to-action-message"}>HOVER TO OPEN THE DOOR</h1> */}
    </>
  );
};

export default WelcomePage;
