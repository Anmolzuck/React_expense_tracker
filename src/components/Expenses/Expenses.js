import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  //Filtering the data based on date enterd by user
  const filterdExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterdYear} onFilter={filterChangeHandler} />
      <ExpensesList items={filterdExpense} />
    </Card>
  );
};
export default Expenses;
