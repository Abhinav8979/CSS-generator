import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import Spline from "./Spline";
import MainContent from "./Components/Homepage/MainContent";

function App() {
  return (
    <Spline>
      <Navbar />
      <MainContent />
    </Spline>
  );
}

export default App;
