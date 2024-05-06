/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function handleColorClick(newColor) {
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  }

  return (
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl text-white font-semibold mb-8">
        Click on a color
      </h1>
      <div className=" flex gap-4">
        <button
          onClick={() => handleColorClick("red")}
          className="color-button"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => handleColorClick("green")}
          className="color-button"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => handleColorClick("blue")}
          className="color-button"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => handleColorClick("purple")}
          className="color-button"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => handleColorClick("yellow")}
          className="color-button"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => handleColorClick("pink")}
          className="color-button"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => handleColorClick("olive")}
          className="color-button"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
      </div>
    </div>
  );
}

export default App;
