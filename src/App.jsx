import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesList from './components/Expenses/ExpensesList';

const expensesData = [
  {
    id: '1',
    title: 'Books',
    price: 50,
    date: new Date(2022, 4, 15),
  },
  {
    id: '2',
    title: 'Books',
    price: 50,
    date: new Date(2022, 4, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (newExpense) => {
    console.log('Added', newExpense);
    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
