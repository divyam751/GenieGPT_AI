import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import "../styles/MarkDown.css";

const MarkDown = ({ response }) => {
  const [data, setData] = useState("");
  const containerRef = useRef(null);

  response = " " + response;
  useEffect(() => {
    if (data.length < response.length) {
      const intervalId = setInterval(() => {
        setData((prev) => prev + response.charAt(prev.length + 1));
      }, 20);

      return () => clearInterval(intervalId);
    }
  }, [data, response]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [data]);

  return (
    <div ref={containerRef} className="markdownContainer ">
      <Markdown>{data}</Markdown>{" "}
    </div>
  );
};

export default MarkDown;
