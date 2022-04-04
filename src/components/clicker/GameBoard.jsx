import React from "react";
import "./GameBoard.scss";
import GameboardCard from "./GameboardCard";

// const unitsAncientApes = [
//   {
//     id: 1,
//     name: "Capuchin monkey",
//     value: 100,
//   },
//   {
//     id: 2,
//     name: "",
//     value: 250,
//   },
//   {
//     id: 3,
//     name: "v3",
//     value: 750,
//   },
//   {
//     id: 4,
//     name: "v4",
//     value: 1250,
//   },
//   {
//     id: 5,
//     name: "v5",
//     value: 100,
//   },
//   {
//     id: 6,
//     name: "v6",
//     value: 250,
//   },
//   {
//     id: 7,
//     name: "v7",
//     value: 750,
//   },
//   {
//     id: 8,
//     name: "v8",
//     value: 1250,
//   },
//   {
//     id: 9,
//     name: "v9",
//     value: 100,
//   },
//   {
//     id: 10,
//     name: "v10",
//     value: 250,
//   },
//   {
//     id: 11,
//     name: "v11",
//     value: 750,
//   },
//   {
//     id: 12,
//     name: "v12",
//     value: 1250,
//   },
// ];

const unitsAncientApes = [
  {
    id: 1,
    name: "Capuchin monkey",
    startValue: 100,
    passiveIncomeBoost: 0.001,
    onClickBoost: 0.1,
    upgrades: [
      {
        name: "Rocky Capuchino",
        description: "Adds rocks to Capuchin equipment",
        newValue: 250,
        newPassiveIncomeBoost: 0.00125,
        newOnClickBoost: 0.125,
      },
      {
        name: "Golden Capuchino",
        description: "Throws gold totems that add additional passive income",
        newValue: 750,
        newPassiveIncomeBoost: 0.00175,
        newOnClickBoost: 0.15,
      },
    ],
  },
  {
    id: 2,
    name: "Dwarf Chimpanze",
    startValue: 250,
    passiveIncomeBoost: 0.0025,
    onClickBoost: 0.25,
    upgrades: [
      {
        name: "Warrior Chimpanze",
        description: "Adds rocks to Monkey equipment",
        newValue: 1500,
        newPassiveIncomeBoost: 0.00275,
        newOnClickBoost: 0.3,
      },
      {
        name: "Shaman Chimpanze",
        description: "Shaman boosts other shamans to gain ",
        newValue: 3750,
        newPassiveIncomeBoost: 0.00375,
        newOnClickBoost: 0.4,
      },
    ],
  },
  {
    id: 3,
    name: "Proboscis Monkey",
    startValue: 750,
    passiveIncomeBoost: 0.005,
    upgrades: [
      {
        name: "Crafty Probosciscus",
        description: "Monkey becomes enlightened by social and trading skills",
        newValue: 3000,
        newPassiveIncomeBoost: 0.00275,
        newOnClickBoost: 0.3,
      },
      {
        name: "Bussines Probosciscus",
        description: "",
        newValue: 12500,
        newPassiveIncomeBoost: 0.00375,
        newOnClickBoost: 0.4,
      },
      {
        name: "Master of Bussines Probosciscus",
        description: "Monkey becomes their era Wolf of Wallstreet",
        newValue: 100000,
        newPassiveIncomeBoost: 0.00375,
        newOnClickBoost: 0.4,
      },
    ],
  },
  {
    id: 4,
    name: "v4",
    startValue: 1250,
  },
  {
    id: 5,
    name: "v5",
    startValue: 100,
  },
  {
    id: 6,
    name: "v6",
    startValue: 250,
  },
  {
    id: 7,
    name: "v7",
    startValue: 750,
  },
  {
    id: 8,
    name: "v8",
    startValue: 1250,
  },
  {
    id: 9,
    name: "v9",
    startValue: 100,
  },
  {
    id: 10,
    name: "v10",
    startValue: 250,
  },
  {
    id: 11,
    name: "v11",
    startValue: 750,
  },
  {
    id: 12,
    name: "v12",
    startValue: 1250,
  },
];

// const unitsStonedApes = [];
// const unitsAdvancedApes = [];

const GameBoard = () => {
  return (
    <div className="game-board">
      {unitsAncientApes.map((unit) => {
        return <GameboardCard unit={unit} key={unit.id} />;
      })}
    </div>
  );
};

export default GameBoard;
