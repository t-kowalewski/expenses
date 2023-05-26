import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <div className='expenses'>
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />;
      })}
    </div>
  );
};

export default ExpensesList;
