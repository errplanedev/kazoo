import { useState } from "react";
import "./App.css";
import AboutView from "./views/AboutView";
import JWTDecoderView from "./views/JWTDecoderView";
import Base64View from "./views/Base64View";

function App() {
  const [view, setView] = useState("about");

  return (
    <div className="main">
      <aside>
        <h1>kazoo</h1>
        <button
          onClick={() => {
            setView("about");
          }}
        >
          about
        </button>
        <button
          onClick={() => {
            setView("jwt-decoder");
          }}
        >
          JWT decoder
        </button>
        <button
          onClick={() => {
            setView("base64");
          }}
        >
          base64 tools
        </button>
      </aside>
      <div className="tool">
        {view == "about" && <AboutView />}
        {view == "jwt-decoder" && <JWTDecoderView />}
        {view == "base64" && <Base64View />}
      </div>
    </div>
  );
}

export default App;
