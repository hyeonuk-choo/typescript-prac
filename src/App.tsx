import React from "react";
import "./App.css";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };
  return <Greetings name="React" onClick={onClick} />;
};

export default App;
