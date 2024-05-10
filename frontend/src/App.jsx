import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Genie from "./pages/Genie";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/genie" element={<Genie />} />
      </Routes>
    </div>
  );
}

export default App;
