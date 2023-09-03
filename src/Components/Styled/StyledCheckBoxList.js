import { FormControlLabel, Stack, styled } from '@mui/material';
import StyledCheckbox from './StyledCheckbox';

const StyledLabel = styled(FormControlLabel)(() => ({
  marginBottom: '0',

  '& .MuiFormControlLabel-label': {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
  },
}));

export default function StyledCheckboxList({ items, onChange, value, readOnly }) {
  return (
    <Stack>
      {items.map((option) => (
        <StyledLabel
          key={option.value}
          label={option.label}
          control={
            <StyledCheckbox
              checked={value.includes(option?.value)}
              onChange={() => {
                if (readOnly) {
                  return;
                }
                onChange(option);
              }}
              sx={{
                padding: '3px 8px',
              }}
            />
          }
        />
      ))}
    </Stack>
  );
}
