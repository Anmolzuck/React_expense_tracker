import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //We are executing this function to ExpenseForm.js form and getting the expenseData value from there
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    //We pass the final data to the App.js file (Child to parent data transfer)
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
