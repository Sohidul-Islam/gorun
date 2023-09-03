import { Stack, Typography } from '@mui/material';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

export default function Rating({ amount, titleSx }) {
  return (
    <Stack direction="row" alignItems="center" gap="2px" color={amount > 2.5 ? 'success.main' : 'error.main'}>
      <StarIcon style={{ color: 'inherit' }} />
      <Typography variant="body4" color="inherit" sx={titleSx}>
        {amount}
      </Typography>
    </Stack>
  );
}
