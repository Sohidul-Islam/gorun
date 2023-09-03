import { Stack, Typography } from '@mui/material';
import moment from 'moment';

export default function TableDateTime({ date }) {
  return (
    <Stack gap={1.5}>
      <Typography variant="body4">{moment(date)?.format('MMM DD, YYYY')}</Typography>
      <Typography variant="inherit" fontSize={12} lineHeight="15px" fontWeight={500} color="#737373">
        {moment(date)?.format('hh:mm A')}
      </Typography>
    </Stack>
  );
}
