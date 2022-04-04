import React, { createContext } from "react";

import { useState } from "react";
import "./App.scss";

import Navigation from "./components/navigation/Navigation";
import Clicker from "./components/clicker/Clicker";
import Sidebar from "./components/sidebar/Sidebar";
import ActionMenu from "./components/action-menu/ActionMenu";

export const AppContext = createContext();

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [onClickIncrement, setOnClickIncrement] = useState(1);
  const [passiveIncomeValue, setPassiveIncomeValue] = useState(0);

  return (
    <AppContext.Provider
      value={{
        currentValue,
        setCurrentValue,
        onClickIncrement,
        setOnClickIncrement,
        passiveIncomeValue,
        setPassiveIncomeValue,
      }}
    >
      <div className="app">
        <Navigation />
        <Sidebar />
        <Clicker />
        <ActionMenu />
      </div>
    </AppContext.Provider>
  );
};

export default App;
