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
  const [die, setDie] = useState(allNewDice);

  //Map random numbers to Die component
  const diceNumbers = die.map((numbers) => <Die value={numbers} />);

  return (
    <main>
      <div className="container">{diceNumbers}</div>
    </main>
  );
};

export default App;
