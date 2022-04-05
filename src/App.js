import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

const App = () => {
  const allNewDice = () => {
    const diceElements = [];
    for (let i = 0; i < 10; i++) {
      diceElements.push({
        id: nanoid(),
        //Generate Random numbers between 1 & 6
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return diceElements;
  };

  //States
  const [dice, setDice] = useState(allNewDice);

  //Hold Dice
  const holdDice = (id) => {
    console.log(id);

    setDice((prevDice) =>
      prevDice.map((die) => {
        if (id === die.id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        } else {
          return die;
        }
      })
    );
  };

  //Map random numbers to Die component
  const diceNumbers = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      holdDat={die.isHeld}
      handleClick={() => holdDice(die.id)}
    />
  ));

  //click button generate random numbers
  const handleClick = () => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
      })
    );
  };

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="container">{diceNumbers}</div>
      <button className="roll" onClick={handleClick}>
        Roll
      </button>
    </main>
  );
};

export default App;
