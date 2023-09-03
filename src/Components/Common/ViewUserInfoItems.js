import { Stack, Typography } from '@mui/material';

export default function ViewUserInfoItem({ title, value, valueSx, type = 'text' }) {
  return (
    <Stack gap="10px" marginBottom="28px">
      <Typography variant="body4" color="text.secondary2">
        {title}
      </Typography>
      {type === 'text' && (
        <Typography textTransform="capitalize" sx={valueSx} variant="body4">
          {value}
        </Typography>
      )}
    </Stack>
  );
}
