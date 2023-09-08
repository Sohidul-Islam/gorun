import InfoCard from "@/src/Components/Shared/StyledCharts/InfoCard";
import { Grid } from "@mui/material";
import React from "react";

function Summary() {
  return (
    <Grid container spacing={7.5} mt={7.5}>
      <Grid item xs={12} md={3}>
        <InfoCard
          title="Total Order"
          value={Math.round(Math.random() * 100 - 1)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <InfoCard
          title="Total Users"
          value={Math.round(Math.random() * 100 - 1)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <InfoCard
          title="Total Online Shop"
          value={Math.round(Math.random() * 100 - 1)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <InfoCard
          title="Total Offline Shop"
          value={Math.round(Math.random() * 100 - 1)}
        />
      </Grid>
    </Grid>
  );
}

export default Summary;
