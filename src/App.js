import React from "react";
import SitewideNavbar from "./components/NavbarComp";
import BackgroundVideo from "./components/bgvideo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <SitewideNavbar />
      </div>
      <BackgroundVideo />
      <div></div>
    </div>
  );
}

export default App;
