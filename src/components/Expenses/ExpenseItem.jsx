import { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expense }) => {
  const { date, price } = expense;
  const [title, setTitle] = useState(expense.title);

  // const clickHandler = () => {
  //   setTitle('Changed');
  // };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>

      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
