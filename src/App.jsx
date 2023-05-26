import ExpensesList from './components/ExpensesList';

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
      <h2>Expenses App</h2>
      <ExpensesList expenses={expenses} />
      {/* <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} /> */}
    </div>
  );
}

export default App;
