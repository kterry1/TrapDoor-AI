import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './chat-bubble.css';
import { useWindupString } from 'windups';
import ExitSVG from '../../assets/exit.svg';
function ChatBubble({ data = '', handleReset, handleExit }) {
    const [windup] = useWindupString('AI: ' + data, { skipped: false });
    return (_jsx("div", { children: _jsxs("div", { className: "chat-bubble-container", children: [_jsx("img", { onClick: handleExit, src: ExitSVG, alt: "exit chat", className: "exit-chat" }), _jsx("div", { className: "chat-bubble", children: windup }), _jsx("button", { className: "reset-chat-prompt", onClick: handleReset, children: "Ask Another Question" })] }) }));
}
export default ChatBubble;
