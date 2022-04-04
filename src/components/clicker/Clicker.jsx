import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import "./Clicker.scss";
import GameBoard from "./GameBoard";

const Clicker = () => {
  const { currentValue, setCurrentValue, onClickIncrement } =
    useContext(AppContext);

  /* on first render */
  // useEffect(() => {

  // }, []);

  /* Update value on button click */
  const changeValue = () => {
    console.log(currentValue);
    setCurrentValue((prevValue) => prevValue + onClickIncrement);
  };

  return (
    <div className="clicker">
      <GameBoard />
      <span className="displayed-value">{currentValue}</span>
      <button className="clicker-btn" onClick={changeValue}>
        Clicker
      </button>
    </div>
  );
};

export default Clicker;
