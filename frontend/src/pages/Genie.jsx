import { useState } from "react";
import "../styles/Genie.css";
import { GiMagicLamp } from "react-icons/gi";
import laptop from "../assets/laptop.png";
import MarkDown from "../components/MarkDown";

const Genie = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitPrompt();
    }
  };

  const submitPrompt = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });
      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      setResponse(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(response);

  return (
    <div className="genie-container">
      <div className="genie-box">
        <img className="laptop" src={laptop} alt="" />
        <div
          className={`genie-screen ${
            response === "" ? "mountScreenStyle" : ""
          }`}
        >
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <span
              className={`textArea ${response === "" ? "mountTextArea" : ""}`}
            >
              {response === "" ? (
                <h1>Welcome!</h1>
              ) : (
                <MarkDown response={response} />
              )}
            </span>
          )}
        </div>
        <div className="genie-userPrompt">
          <input
            type="text"
            className="promptInputBox"
            value={prompt}
            placeholder="Enter your prompt and let the magic happen."
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={submitPrompt}>
            <GiMagicLamp size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Genie;
