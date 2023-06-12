import Chart from '../Chart/Chart';

const ExpensesChart = ({ filteredExpenses }) => {
  const chartData = [
    { value: 0, label: 'Jan' },
    { value: 0, label: 'Feb' },
    { value: 0, label: 'Mar' },
    { value: 0, label: 'Apr' },
    { value: 0, label: 'May' },
    { value: 0, label: 'Jun' },
    { value: 0, label: 'Jul' },
    { value: 0, label: 'Aug' },
    { value: 0, label: 'Sep' },
    { value: 0, label: 'Oct' },
    { value: 0, label: 'Nov' },
    { value: 0, label: 'Dec' },
  ];

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth(); // will return month starting 0
    chartData[expenseMonth].value += Number(expense.price);
  }

  return <Chart chartData={chartData} />;
};

export default ExpensesChart;
