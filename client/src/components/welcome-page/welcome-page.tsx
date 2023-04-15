import "./welcome-page.css";
import axios from "axios";
import AnimatedSheepSVG from "../../assets/silly-sheep.svg";
import SendSVG from "../../assets/send.svg";
import { useRef, useState } from "react";
import Button from "../button";
import TrapDoor from "../trap-door";
import SideLinks from "../side-links";
import ChatBubble from "../chat-bubble/chat-bubble";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { API_URL } from "../../constants";

async function fetchData(
  url: string,
  data: { prompt: string },
  setData: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    const response = await axios.post(url, data);
    setData(response.data);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

const WelcomePage = (): JSX.Element => {
  const [peek, setPeek] = useState<boolean>(false);
  const [activatedChat, setActivatedChat] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<string>("");
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
          <div style={{ position: "relative", width: "270px" }}>
            <TransitionGroup component={null}>
              {!activatedChat && (
                <CSSTransition
                  in={!activatedChat}
                  timeout={500}
                  classNames="chat"
                  unmountOnExit
                >
                  <Button
                    handleClick={() => setActivatedChat(true)}
                    displayedText="LET'S CHAT - AI"
                    buttonTheme="ai"
                  />
                </CSSTransition>
              )}
              {activatedChat && (
                <CSSTransition
                  in={activatedChat}
                  timeout={500}
                  classNames="chat"
                  unmountOnExit
                  onEntered={handleEntered}
                >
                  <div className="input-wrapper">
                    <input
                      disabled={data.length < 0}
                      ref={inputRef}
                      value={prompt}
                      type="text"
                      maxLength={32}
                      className="button"
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <img
                      src={SendSVG}
                      className="send-chat-msg-button"
                      onClick={() => {
                        if (data.length < 0) {
                          return;
                        }
                        return fetchData(API_URL, { prompt: prompt }, setData);
                      }}
                    />
                    <ChatBubble
                      handleExit={() => setActivatedChat(false)}
                      data={data}
                      handleReset={() => setPrompt("")}
                    />
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
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
