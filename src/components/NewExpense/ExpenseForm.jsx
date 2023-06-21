import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, toggleFormHandler }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, title: e.target.value };
    });
  };
  const priceChangeHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, price: +e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = { ...userInput, date: new Date(userInput.date) };

    console.log(newExpense);
    // Test for empty fields
    for (const key in newExpense) {
      if (!newExpense[key] || isNaN(newExpense[key])) {
        alert("Fields can't be empty");
        return;
      }
    }

    onSaveExpenseData(newExpense);

    setUserInput({
      title: '',
      price: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        {/* Title */}
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>

        {/* price */}
        <div className='new-expense__control'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            id='price'
            value={userInput.price}
            onChange={priceChangeHandler}
          />
        </div>

        {/* Date */}
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            min='2023-01-01'
            max='2024-12-31'
            id='date'
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={toggleFormHandler}>
          Cancel
        </button>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
