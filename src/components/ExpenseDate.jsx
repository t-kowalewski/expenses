import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.toLocaleString('en-GB', { year: 'numeric' });
  const day = date.toLocaleString('en-GB', { day: 'numeric' });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
