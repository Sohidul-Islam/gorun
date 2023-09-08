// local
import moment from "moment";
import { useState } from "react";

import ChartBox from "./ChartBox";
import StyledAreaChart from "./StyledAreaChart";

export const generateGraphData = (items, getData, getLabel) => {
  const labels = [];
  const data = [];
  items.forEach((item) => {
    // labels.push();
    labels.push(getLabel(item));
    data.push(getData(item));
  });

  return { labels, data };
};

export default function CommonAreaChart({
  title,

  sx,
  gridProps,
  valueLabel = "Orders",
}) {
  const data = generateGraphData(
    [],
    (item) => item[tabValueToPropsMap[currentTab].graphValueProp],
    (item) => moment(item?.date).format("MMMM DD")
  );

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        fill: true,
        label: valueLabel,
        data: data.data,
        borderColor: "rgba(126, 130, 153, 1)",
        borderWidth: 1,
        backgroundColor: "rgba(126, 130, 153, 0.15)",
      },
    ],
  };

  return (
    <ChartBox
      chartHeight={300}
      // dateRange={range}
      // setDateRange={setRange}
      title={title}
      sx={{
        overflow: "visible",
        ...sx,
      }}
      sm={12}
      {...gridProps}
    >
      <StyledAreaChart data={chartData} />
    </ChartBox>
  );
}
