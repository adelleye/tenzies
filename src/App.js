import React, { useState } from "react";
import Die from "./components/Die";

const App = () => {
  const allNewDice = () => {
    const diceElements = [];
    for (let i = 0; i < 10; i++) {
      diceElements.push({
        //Generate Random numbers between 1 & 6
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return diceElements;
  };

  //States
  const [dice, setDice] = useState(allNewDice);

  //Map random numbers to Die component
  const diceNumbers = dice.map((numbers) => <Die value={numbers.value} />);

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
