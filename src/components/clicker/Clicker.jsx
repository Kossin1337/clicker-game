import React from "react";
import "./Clicker.scss";

const Clicker = () => {
  return (
    <div className="clicker">
      <h1 className="title">Clicker</h1>
      <span className="displayed-value">VALUE</span>
      <button className="clicker-btn">Clicker</button>
    </div>
  );
};

export default Clicker;
