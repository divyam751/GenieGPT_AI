import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { GiMagicLamp } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [path, setPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className="navbar">
      <nav className="navbar-container">
        {path !== "/genie" ? (
          <RouterLink className="navlinks" to="/genie">
            {" "}
            Try Genie GPT
            <GiMagicLamp size={40} color="gold" />
          </RouterLink>
        ) : (
          <RouterLink className="navlinks" to="/">
            {" "}
            Home Page
            <FaHome size={40} color="gold" />
          </RouterLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
