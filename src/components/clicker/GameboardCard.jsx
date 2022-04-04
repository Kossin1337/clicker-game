import React from "react";
import "./GameBoardCard.scss";

const GameboardCard = ({ unit }) => {
  console.log(unit);

  return (
    <div className="gameboard-card">
      <span>{unit.name}</span>
      <span>{unit.startValue}</span>
      <div className="buy-btn">Buy for {unit.startValue}</div>
    </div>
  );
};

export default GameboardCard;
