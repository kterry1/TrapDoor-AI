import "./welcome-page.css";
import AnimatedSheepSVG from "../../assets/silly-sheep.svg";
import { useState } from "react";
import Button from "../button";
import TrapDoor from "../trap-door";
import SideLinks from "../side-links";

const WelcomePage = (): JSX.Element => {
  const [peek, setPeek] = useState<boolean>(false);

  return (
    <>
      <div className="welcome-page-container">
        <div className="welcome-page-buttons-container">
          <Button
            displayedText="CLICK TO KNOCK"
            buttonTheme="knock"
            disabled={peek}
            handleClick={() => setPeek(true)}
          />
          <Button displayedText="HOVER TO OPEN THE DOOR" buttonTheme="hover" />
          <div className="ai-container">
            <Button displayedText="LET'S CHAT - AI" buttonTheme="ai" />
          </div>
        </div>
        <TrapDoor
          displayedText="Kevin Terry [Software Engineer]"
          peek={peek}
          behindDoorImg={AnimatedSheepSVG}
          handleAnimationEnd={() => setPeek(false)}
        />
        <SideLinks />
      </div>
    </>
  );
};

export default WelcomePage;
