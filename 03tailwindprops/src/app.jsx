import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Card from "./components/Card.jsx";

export function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Raj",
    age: 20,
    address: {
      city: "Hardoi",
      state: "U.P.",
      country: "India",
    },
  };

  let newArr = [8, 8, 1, 0, 8, 8, 6, 9, 7, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with Tailwind</h1>
      <Card username="raj" myArr={newArr} />
      <Card username="Raj" post="Staff-Engineer" />
      <Card />
    </>
  );
}
