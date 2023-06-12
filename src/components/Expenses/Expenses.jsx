import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  const filterYearHandler = (e) => {
    setFilteredYear(e.target.value);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterYear={filterYearHandler}
      />

      <ExpensesChart filteredExpenses={filteredExpenses} />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
