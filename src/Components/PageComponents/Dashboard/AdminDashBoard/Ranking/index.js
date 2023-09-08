import React from "react";
import Table from "./Table";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { staticRankingData } from "./helpers";

function RankingTable({ title, children }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: "#fff",
        border: `1px solid ${theme.palette.custom.border}`,
        borderRadius: "7px",
        position: "relative",
        overflow: "hidden",
        padding: "20px 18px",
      }}
    >
      <Stack>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          {title}
        </Typography>
      </Stack>
      {!children && <Table data={staticRankingData} />}
    </Box>
  );
}

export default RankingTable;
