import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ chartData }) => {
  return (
    <div className='chart'>
      {chartData.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={null}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
