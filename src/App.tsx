import { useState } from "react";
import "./App.css";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app-container">
      <h1>Hello, World!</h1>
      <button
        onClick={() => {
          setCounter((oldCounter) => oldCounter + 1);
        }}
      >
        Counter: {counter}
      </button>
    </div>
  );
}
