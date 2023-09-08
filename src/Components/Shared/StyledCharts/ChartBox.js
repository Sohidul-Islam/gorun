import { Box, Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";
// import DateRange from './DateRange';
import StyledBox from "./StyledBox";

export default function ChartBox({
  dateRange,
  setDateRange,
  title,
  customTitle,
  chartHeight,
  children,
  loading,
  startDateKey,
  endDateKey,
  ...props
}) {
  return (
    <Grid {...props}>
      <StyledBox
        sx={{
          ...props?.sx,
          overflow: "visible",
        }}
        padding
        loading={loading}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pb={5}
        >
          {title && (
            <Typography variant="body1" fontWeight={600}>
              {title}
            </Typography>
          )}
          {customTitle && customTitle}
          {/* <DateRange endKey={endDateKey} startKey={startDateKey} range={dateRange} setRange={setDateRange} /> */}
        </Stack>
        <Box
          sx={{
            height: `${chartHeight}px`,
          }}
        >
          {children}
        </Box>
      </StyledBox>
    </Grid>
  );
}
