import './ExpensesList.css';
import Card from '../UI/Card';
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
