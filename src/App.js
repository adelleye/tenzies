import React, { useState } from "react";
import Die from "./components/Die";

const App = () => {
  //Generate Random numbers between 1 & 6
  const allNewDice = () => {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 6) + 1);
    }
    return randomNumbers;
  };

  //States
  const [dice, setDice] = useState(allNewDice);

  //Map random numbers to Die component
  const diceNumbers = dice.map((numbers) => <Die value={numbers} />);

  //click button generate random numbers
  const handleClick = () => {
    return setDice(allNewDice);
  };

  return (
    <main>
      <div className="container">{diceNumbers}</div>
      <button className="roll" onClick={handleClick}>
        {" "}
        Roll{" "}
      </button>
    </main>
  );
};

export default App;
