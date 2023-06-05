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

  const addExpenseHandler = (newExpense) => {
    console.log('Added', newExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
