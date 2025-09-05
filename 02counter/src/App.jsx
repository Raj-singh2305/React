import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(25); //hooks(counter > variable, setCounter > function)
  // let counter = 25;
  const addValue = () => {
    setCounter((preCounter) => preCounter + 1); //setcounter(counter+1)=>isko 4 baar likhne se 4 add ni hoga tbhi fn call ki
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course with Raj {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
