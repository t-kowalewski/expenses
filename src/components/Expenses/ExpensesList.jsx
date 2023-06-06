import { useState } from 'react';

import './ExpensesList.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  console.log(filteredYear);

  const filterYearHandler = (e) => {
    setFilteredYear(e.target.value);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterYear={filterYearHandler}
      />

      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />;
      })}
    </Card>
  );
};

export default ExpensesList;
