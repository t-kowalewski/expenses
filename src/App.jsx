import NewExpense from './components/NewExpense/NewExpense';
import ExpensesList from './components/Expenses/ExpensesList';

function App() {
  const expenses = [
    {
      title: 'Books',
      price: 50,
      date: new Date(2022, 4, 15),
    },
    {
      title: 'Books',
      price: 50,
      date: new Date(2022, 4, 15),
    },
  ];

  return (
    <div>
      <NewExpense />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
