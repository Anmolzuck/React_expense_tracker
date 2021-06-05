import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  useState();

  //This is for multiple sates management
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //This is for single sates management . We pass in an object of states
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  const titleChangeHandler = (event) => {
    //This was for multiple sates management
    setEnteredTitle(event.target.value);

    //This is for single sates management (But dont use this instead the the one given below)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Use this because it is safe
    // setUserInput((prevSate) => {
    //   return { ...prevSate, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    if (
      expenseData.title === "" ||
      expenseData.amount === "" ||
      expenseData.date === null
    ) {
      alert("Please enter the data before submiting");
    } else {
      //Here we execute the function from NewExpense.js file and pass in the value of the expenseData. (Child to Parent Data passing)
      props.onSaveExpenseData(expenseData);
    }

    //To clear the input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
