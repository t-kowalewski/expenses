import './ExpensesList.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <Card className='expenses'>
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />;
      })}
    </Card>
  );
};

export default ExpensesList;
