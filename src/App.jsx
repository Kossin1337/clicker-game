import { useState } from "react";
import "./App.scss";

import Navigation from "./components/navigation/Navigation";
import Clicker from "./components/clicker/Clicker";
import Sidebar from "./components/sidebar/Sidebar";
import ActionMenu from "./components/action-menu/ActionMenu";

const App = () => {
  const [value, setValue] = useState(0);
  const [passiveIncomeValue, setPassiveIncomeValue] = useState(0);

  return (
    <div className="app">
      <Navigation />
      <Sidebar />
      <Clicker />
      <ActionMenu />
    </div>
  );
};

export default App;
