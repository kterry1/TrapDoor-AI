import './welcome-page.css';
import axios from 'axios';
import AnimatedSheepSVG from '../../assets/silly-sheep.svg';
import SendSVG from '../../assets/send.svg';
import { useReducer, useRef, useState } from 'react';
import Button from '../button';
import TrapDoor from '../trap-door';
import SideLinks from '../side-links';
import ChatBubble from '../chat-bubble/chat-bubble';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

async function fetchData(
  url: string,
  data: { prompt: string },
  dispatch: React.Dispatch<chatAction>,
) {
  try {
    const response = await axios.post(url, data);
    dispatch({ type: 'SET_DATA', payload: response.data });
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

type chatActionTypes =
  | 'ENTER_CHAT'
  | 'EXIT_CHAT'
  | 'RESET_CHAT'
  | 'SET_PROMPT'
  | 'SET_DATA';

interface chatAction {
  type: chatActionTypes;
  payload?: string;
}

const chatReducer = (
  state: chatStateTypes,
  action: chatAction,
): chatStateTypes => {
  switch (action.type) {
    case 'ENTER_CHAT':
      return {
        ...state,
        activatedChat: true,
      };
    case 'EXIT_CHAT':
      return {
        ...state,
        activatedChat: false,
        prompt: '',
        data: '',
      };
    case 'RESET_CHAT':
      return {
        ...state,
        prompt: '',
        data: '',
      };
    case 'SET_PROMPT':
      return {
        ...state,
        prompt: action.payload!,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload!,
      };
    default:
      return state;
  }
};

interface chatStateTypes {
  activatedChat: boolean;
  prompt: string;
  data: string;
}

const initialChatState: chatStateTypes = {
  activatedChat: false,
  prompt: '',
  data: '',
};

const WelcomePage = (): JSX.Element => {
  const [peek, setPeek] = useState<boolean>(false);
  const [{ activatedChat, prompt, data }, dispatch] = useReducer(
    chatReducer,
    initialChatState,
  );
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
          <div style={{ position: 'relative', width: '270px' }}>
            <TransitionGroup component={null}>
              {!activatedChat && (
                <CSSTransition
                  in={!activatedChat}
                  timeout={500}
                  classNames="chat"
                  unmountOnExit
                >
                  <Button
                    handleClick={() => dispatch({ type: 'ENTER_CHAT' })}
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
                      ref={inputRef}
                      value={prompt}
                      type="text"
                      maxLength={32}
                      className="button"
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_PROMPT',
                          payload: e.target.value,
                        })
                      }
                    />
                    <img
                      src={SendSVG}
                      className="send-chat-msg-button"
                      onClick={() => {
                        if (prompt?.length <= 0) {
                          return;
                        }
                        return fetchData('/chat', { prompt: prompt }, dispatch);
                      }}
                    />
                    <ChatBubble
                      handleExit={() => dispatch({ type: 'EXIT_CHAT' })}
                      data={data}
                      handleReset={() => dispatch({ type: 'RESET_CHAT' })}
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
