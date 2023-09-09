import InfoCard from "@/src/Components/Shared/StyledCharts/InfoCard";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Summary from "./Summary";
import RankingTable from "./Ranking";
import ChartBox from "@/src/Components/Shared/StyledCharts/ChartBox";
import CommonAreaChart from "@/src/Components/Shared/StyledCharts/CommonAreaChart";

function AdminDashBoard() {
  const data = {
    labels: ["Total Customers"],

    datasets: [
      {
        label: "% of Customers",
        data: [],
        borderWidth: 0,
      },
    ],
  };
  return (
    <Box marginBottom={12}>
      <Summary />
      <Grid container spacing={7.5} mt={3}>
        <Grid item xs={12} md={6}>
          <ChartBox title={"User Graph"}>
            <CommonAreaChart />
          </ChartBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartBox title={"Order Graph"}>
            <CommonAreaChart />
          </ChartBox>
        </Grid>

        <Grid item xs={12} md={12}>
          <RankingTable title={"Shop Ranking"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <RankingTable title={"User Ranking"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashBoard;
