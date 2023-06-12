import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveExpenceDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    toggleFormHandler();
  };

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenceDataHandler}
          toggleFormHandler={toggleFormHandler}
        />
      ) : (
        <button type='button' onClick={toggleFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
