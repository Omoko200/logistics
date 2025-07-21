import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SvgIcons from "./components/svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-full bg-black p-20">
        <p className="text-white font-bold text-center">This is a container</p>
        <span>
          <SvgIcons name="book" />
        </span>
      </div>
      <SvgIcons name="clock" />
    </>
  );
}

export default App;