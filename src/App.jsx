import { useState } from "react";
import "./App.css";
import { sendRes } from "./openai";

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendRes(input);
    setLoading(false);
    setInput("");
    setText(res);
  };
  return (
    <div className="main">
      <h1>Chat Bot</h1>
      <textarea value={loading ? "Please Wait..." : text} cols="91" rows="20" />
      <form onSubmit={handleSend} className="form">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="msg"
          type="text"
        />
        <button disabled={loading} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
