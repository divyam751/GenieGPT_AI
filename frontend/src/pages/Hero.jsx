import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import logo from "../assets/logo.png";

const Hero = () => {
  const [heading, setHeading] = useState("");
  const str = " Welcome to Genie GPT!";

  useEffect(() => {
    if (heading.length < str.length) {
      const intervalId = setInterval(() => {
        setHeading((prev) => prev + str.charAt(prev.length + 1));
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [heading]);

  return (
    <div className="hero-page">
      <img className="hero-logoImg" src={logo} alt="Genie" />
      {/* Typewriter */}
      <h1 className="hero-page-title">{heading}</h1>
    </div>
  );
};

export default Hero;
