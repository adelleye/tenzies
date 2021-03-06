import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const App = () => {
  //Get height and width
  const { width, height } = useWindowSize();

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
  const [tenzies, setTenzies] = React.useState(false);
  const [numberOfRolls, setNumberOfRolls] = React.useState(0);

  useEffect(() => {
    //Check if every value is the same
    const isSameValue = dice.every((die) => die.value === dice[0].value);
    console.log(isSameValue);

    //Check if all dice are held
    const isAllHeld = dice.every((die) => die.isHeld);
    console.log(isAllHeld);

    if (isSameValue && isAllHeld) {
      console.log("You win!");
      setTenzies(true);
    } else {
      console.log("Not yet!");
    }
  }, [dice]);

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
    setNumberOfRolls((prevNumberOfRolls) => (prevNumberOfRolls += 1));
  };

  //Reset game
  function newGame() {
    console.log("New game");
    setTenzies(false);
    setDice(allNewDice());
    setNumberOfRolls(0);
  }

  return (
    <main>
      {tenzies && (
        <Confetti
          width={width}
          height={height}
          colors={[
            "#ffcfd2",
            "#8eecf5",
            "#b9fbc0",
            "#fbf8cc",
            "#fde4cf",
            "#ff0a54",
          ]}
        />
      )}

      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls. Least number of rolls wins!
      </p>
      <div className="container">{diceNumbers}</div>
      <button className="button" onClick={tenzies ? newGame : handleClick}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      <p className="numberOfRolls">
        {tenzies ? `Nice! It took you ${numberOfRolls} rolls to win!` : ""}
      </p>
    </main>
  );
};

export default App;
