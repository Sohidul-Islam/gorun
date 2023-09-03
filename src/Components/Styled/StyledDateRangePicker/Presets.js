import { Button, Stack } from '@mui/material';
import moment from 'moment';

export const getFirstMonday = (period) => {
  let start;

  if (period === 'week') start = moment().startOf('week');
  else start = moment().startOf('month');

  while (start.day() !== 1) start.add('1', 'day');
  return start;
};

const presets = [
  {
    text: 'Today',
    start: moment(),
    end: moment(),
  },
  {
    text: 'This Week',
    start: getFirstMonday('week'),
    end: moment(),
  },
  {
    text: 'This Month',
    start: getFirstMonday('month'),
    end: moment(),
  },
];

function DatePresets({ startDate, endDate, onChange }) {
  return (
    <Stack direction="row" alignItems="center" gap={3} pl={5} pb={5}>
      {presets.map(({ text, start, end }) => {
        const isChosen =
          moment(start).format('YYYY/MM/DD') === moment(startDate).format('YYYY/MM/DD') &&
          moment(end).format('YYYY/MM/DD') === moment(endDate).format('YYYY/MM/DD');

        return (
          <Button
            key={text}
            className={` ${isChosen ? 'active' : ''}`}
            onClick={() => onChange({ startDate: start, endDate: end })}
            variant={isChosen ? 'contained' : 'outlined'}
            size="small"
            sx={{
              fontSize: '12px',
              lineHeight: '1',
              borderRadius: '4px',
              padding: '8px 12px',
            }}
          >
            {text}
          </Button>
        );
      })}
    </Stack>
  );
}
export default DatePresets;
