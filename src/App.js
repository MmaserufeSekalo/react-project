import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Polokwane" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.delac.io/" target="_blank">
            Mmaserufe Sekalo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MmaserufeSekalo/react-project"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
