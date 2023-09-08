import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Stack, Typography, useTheme } from '@mui/material';

export default function IncreaseDecreaseTag({ status, amount }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        color: status === 'increase' ? theme.palette.success.main : theme.palette.error.main,
        marginBottom: '-5px',
        paddingLeft: 1,
      }}
    >
      {status === 'increase' ? (
        <ArrowDropUpIcon
          sx={{
            fontSize: '35px',
          }}
        />
      ) : (
        <ArrowDropDownIcon
          sx={{
            fontSize: '35px',
          }}
        />
      )}
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          lineHeight: '24px',
          fontWeight: '600',
        }}
      >
        {amount}
      </Typography>
    </Stack>
  );
}
