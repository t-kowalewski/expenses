import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expense }) => {
  const { title, date, price } = expense;

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
