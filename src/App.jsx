import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/nav";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <section className="section">
        <Nav />
        <Meme />
      </section>
    </div>
  );
}

export default App;
