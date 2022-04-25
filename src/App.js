import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import React, { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const deleteFunctionHandler = (id) => {
    const filteredArray = expenses.filter((item) => {
      if (item.id !== id) {
        return [item];
      }
    });
    setExpenses(filteredArray);
  };
  // console.log(expen);
  return (
    <div className="App">
      {expenses.map((item) => (
        <ExpenseItem
          onDelete={deleteFunctionHandler}
          id={item.id}
          key={item.id}
          date={item.date}
          text={item.title}
          price={item.amount}
        />
      ))}
    </div>
  );
}

export default App;
