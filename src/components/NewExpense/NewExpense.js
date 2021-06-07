import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [clickChange, setClickChange] = useState(false);
  //We are executing this function to ExpenseForm.js form and getting the expenseData value from there
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    //We pass the final data to the App.js file (Child to parent data transfer)
    props.onAddExpense(expenseData);
    setClickChange(false);
  };

  const clickChangeHandler = () => {
    setClickChange(true);
  };

  const cancleHandler = () => {
    setClickChange(false);
  };

  return (
    <div className="new-expense">
      {clickChange === false ? (
        <button onClick={clickChangeHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={cancleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
