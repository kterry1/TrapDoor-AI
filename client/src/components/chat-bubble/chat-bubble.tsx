import "./chat-bubble.css";
import { useWindupString } from "windups";
import ExitSVG from "../../assets/exit.svg";

function ChatBubble({
  data = "",
  handleReset,
  handleExit,
}: {
  data: string;
  handleReset: React.MouseEventHandler<HTMLButtonElement>;
  handleExit: React.MouseEventHandler<HTMLImageElement>;
}) {
  const [windup] = useWindupString("AI: " + data, { skipped: false });

  return (
    <div>
      <div className="chat-bubble-container">
        <img
          onClick={handleExit}
          src={ExitSVG}
          alt="exit chat"
          className="exit-chat"
        />
        <div className="chat-bubble">{windup}</div>
        <button className="reset-chat-prompt" onClick={handleReset}>
          Ask Another Question
        </button>
      </div>
    </div>
  );
}

export default ChatBubble;
