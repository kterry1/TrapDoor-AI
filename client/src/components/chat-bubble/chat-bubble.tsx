import "./chat-bubble.css";
import axios from "axios";
import { useState } from "react";
import { useWindupString } from "windups";
import { API_URL } from "../../constants";

async function fetchData(
  url: string,
  data: { prompt: string },
  setData: React.Dispatch<React.SetStateAction<undefined>>
) {
  try {
    const response = await axios.post(url, data);
    console.log(response.data);
    setData(response.data);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

function ChatBubble() {
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState();
  const [windup] = useWindupString("BAHH: " + (data ?? ""), { skipped: false });

  return (
    <div>
      <div className="chat-bubble-container">
        <div className="user-req-msg-container">
          <button
            className="send-chat-msg-button"
            onClick={() => fetchData(API_URL, { prompt: prompt }, setData)}
          >
            Click me
          </button>
          <input onChange={(e) => setPrompt(e.target.value)} />
        </div>
        <div className={`chat-bubble`}>{windup}</div>
      </div>
    </div>
  );
}

export default ChatBubble;
