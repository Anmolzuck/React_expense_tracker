import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //We can use condtional return statements if the whole data we return is changed depending on the conditon
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Found no expenses for this year.
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
