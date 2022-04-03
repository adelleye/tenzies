import React from "react";
import Die from "./components/Die";

const App = () => {
  //Generate Random numbers between 1 & 6
  const allNewDice = () => {
    const randomNumbers = [];

    for (let i = 0; i < 9; i++) {
      randomNumbers[i] = Math.floor(Math.random() * 6) + 1;
      //randomNumbers.push(Math.floor(Math.random() * 6) + 1)
    }
    return randomNumbers;
  };
  console.log(allNewDice());

  return (
    <main>
      <div className="container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="10" />
      </div>
    </main>
  );
};

export default App;
