import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ chartData }) => {
  const valuesArr = chartData.map((item) => item.value);
  const maxValue = Math.max(...valuesArr);

  return (
    <div className='chart'>
      {chartData.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
