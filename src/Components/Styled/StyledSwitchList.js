import { Stack, Typography } from '@mui/material';
import StyledSwitch from './StyledSwitch';

export default function StyledSwitchList({ items, values, onChange }) {
  return (
    <Stack gap={4}>
      {items.map((item) => (
        <Stack key={item.value} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight={500}>
            {item.label}
          </Typography>
          <StyledSwitch
            color="primary"
            checked={values.includes(item.value)}
            onChange={() => {
              onChange(item.value);
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
}
