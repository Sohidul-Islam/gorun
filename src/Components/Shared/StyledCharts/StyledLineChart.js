import { Line } from 'react-chartjs-2';

const defaultOptions = {
  reponsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};

export default function StyledLineChart({ data }) {
  return <Line options={defaultOptions} data={data} />;
}
