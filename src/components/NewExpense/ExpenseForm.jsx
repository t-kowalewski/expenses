import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense__controls'>
        {/* Title */}
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' />
        </div>

        {/* Amount */}
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input type='number' min='0.01' step='0.01' id='amount' />
        </div>

        {/* Date */}
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input type='date' min='2023-01-01' max='2024-12-31' id='date' />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
