import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.holdDat ? "#59E391" : "white",
  };

  return (
    <div className="die" style={styles} onClick={props.handleClick}>
      <p className="die--numbers">{props.value}</p>
    </div>
  );
};

export default Die;
