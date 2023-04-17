import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from 'react/jsx-runtime';
import './welcome-page.css';
import axios from 'axios';
import AnimatedSheepSVG from '../../assets/silly-sheep.svg';
import SendSVG from '../../assets/send.svg';
import { useRef, useState } from 'react';
import Button from '../button';
import TrapDoor from '../trap-door';
import SideLinks from '../side-links';
import ChatBubble from '../chat-bubble/chat-bubble';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { API_URL } from '../../constants';
async function fetchData(url, data, setData) {
  try {
    const response = await axios.post(url, data);
    setData(response.data);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}
const WelcomePage = () => {
  const [peek, setPeek] = useState(false);
  const [activatedChat, setActivatedChat] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [data, setData] = useState('');
  const inputRef = useRef(null);
  const handleEntered = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return _jsx(_Fragment, {
    children: _jsxs('div', {
      className: 'welcome-page-container',
      children: [
        _jsxs('div', {
          className: 'welcome-page-buttons-container',
          children: [
            _jsx(Button, {
              displayedText: 'CLICK TO KNOCK',
              buttonTheme: 'knock',
              disabled: peek,
              handleClick: () => setPeek(true),
            }),
            _jsx(Button, {
              displayedText: 'HOVER TO OPEN THE DOOR',
              buttonTheme: 'hover',
            }),
            _jsx('div', {
              style: { position: 'relative', width: '270px' },
              children: _jsxs(TransitionGroup, {
                component: null,
                children: [
                  !activatedChat &&
                    _jsx(CSSTransition, {
                      in: !activatedChat,
                      timeout: 500,
                      classNames: 'chat',
                      unmountOnExit: true,
                      children: _jsx(Button, {
                        handleClick: () => setActivatedChat(true),
                        displayedText: "LET'S CHAT - AI",
                        buttonTheme: 'ai',
                      }),
                    }),
                  activatedChat &&
                    _jsx(CSSTransition, {
                      in: activatedChat,
                      timeout: 500,
                      classNames: 'chat',
                      unmountOnExit: true,
                      onEntered: handleEntered,
                      children: _jsxs('div', {
                        className: 'input-wrapper',
                        children: [
                          _jsx('input', {
                            disabled: data.length < 0,
                            ref: inputRef,
                            value: prompt,
                            type: 'text',
                            maxLength: 32,
                            className: 'button',
                            onChange: (e) => setPrompt(e.target.value),
                          }),
                          _jsx('img', {
                            src: SendSVG,
                            className: 'send-chat-msg-button',
                            onClick: () => {
                              if (data.length < 0) {
                                return;
                              }
                              return fetchData(
                                '/chat',
                                { prompt: prompt },
                                setData,
                              );
                            },
                          }),
                          _jsx(ChatBubble, {
                            handleExit: () => {
                              setActivatedChat(false);
                              setData('');
                              setPrompt('');
                            },
                            data: data,
                            handleReset: () => {
                              setData('');
                              setPrompt('');
                            },
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
          ],
        }),
        _jsx(TrapDoor, {
          displayedText: 'Kevin Terry [Software Engineer]',
          peek: peek,
          behindDoorImg: AnimatedSheepSVG,
          handleAnimationEnd: () => setPeek(false),
        }),
        _jsx(SideLinks, {}),
      ],
    }),
  });
};
export default WelcomePage;
