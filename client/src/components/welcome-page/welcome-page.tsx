import "./welcome-page.css";
import AnimatedSheepSVG from "../../assets/silly-sheep.svg";
import { useRef, useState } from "react";
import Button from "../button";
import TrapDoor from "../trap-door";
import SideLinks from "../side-links";
import ChatBubble from "../chat-bubble/chat-bubble";
import { CSSTransition } from "react-transition-group";

const WelcomePage = (): JSX.Element => {
  const [peek, setPeek] = useState<boolean>(false);
  const [activatedChat, setActivatedChat] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleEntered = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

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
          <CSSTransition
            in={!activatedChat}
            timeout={0}
            classNames="fade"
            unmountOnExit
          >
            <Button
              handleClick={() => setActivatedChat(true)}
              displayedText="LET'S CHAT - AI"
              buttonTheme="ai"
            />
          </CSSTransition>
          <CSSTransition
            in={activatedChat}
            timeout={500}
            classNames="fade"
            unmountOnExit
            onEntered={handleEntered}
          >
            <input
              ref={inputRef}
              type="text"
              className="ai-button button"
              style={{ maxWidth: "250px", padding: 0 }}
            />
          </CSSTransition>
          {/* <ChatBubble /> */}
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
