import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h3 className='expenses-list__fallback'>No expenses found</h3>;
  }

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </ul>
  );
};

export default ExpensesList;
