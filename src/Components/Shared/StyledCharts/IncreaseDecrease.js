import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Stack, Typography, useTheme } from '@mui/material';

export default function IncreaseDecrease({ status, amount }) {
  const theme = useTheme();

  const colors = {
    increase: theme.palette.success.main,
    decrease: theme.palette.error.main,
    neutral: theme.palette.text.secondary2,
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        color: colors[status],
        marginBottom: '-5px',
      }}
    >
      {status === 'decrease' ? (
        <ArrowDropDownIcon
          sx={{
            fontSize: '30px',
          }}
        />
      ) : (
        <ArrowDropUpIcon
          sx={{
            fontSize: '30px',
          }}
        />
      )}
      <Typography
        variant="body4"
        sx={{
          color: colors[status],
        }}
      >
        {amount}
      </Typography>
    </Stack>
  );
}
