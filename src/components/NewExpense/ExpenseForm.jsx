import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [expenseTitle, setExpenseTitle] = useState('');
  // const [expenseAmount, setExpenseAmount] = useState('');
  // const [expenseDate, setExpenseDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // setExpenseTitle(e.target.value);
    setUserInput((prevInput) => {
      return { ...prevInput, title: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    // setExpenseAmount(e.target.value);
    setUserInput((prevInput) => {
      return { ...prevInput, amount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    // setExpenseDate(e.target.value);
    setUserInput((prevInput) => {
      return { ...prevInput, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(userInput);
    setUserInput({
      title: '',
      amount: '',
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

        {/* Amount */}
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            id='amount'
            value={userInput.amount}
            onChange={amountChangeHandler}
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
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
