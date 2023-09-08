import { Star } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function Rating({ amount, titleSx }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="2px"
      color={amount > 2.5 ? "success.main" : "error.main"}
    >
      <Star style={{ color: "inherit" }} />
      <Typography variant="body4" color="inherit" sx={titleSx}>
        {amount}
      </Typography>
    </Stack>
  );
}
