import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  reponsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
    ],
  },
};

export default function StyledAreaChart({ data }) {
  return <Line options={options} data={data} />;
}
