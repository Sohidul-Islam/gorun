import { Stack, TextField, Typography, styled } from '@mui/material';

const Input = styled(TextField)(() => ({
  '& input': {
    background: '#fff',
    height: '40px',
    padding: '0 10px',
    color: '#A3A3A3',
    fontSize: '16px',
    fontWeight: '400',
    borderRadius: '6px',

    '&::placeholder': {
      color: '#A3A3A3',
      fontSize: '16px',
      fontWeight: '400',
    },
  },

  '& fieldset': {
    outline: '0',
    border: '0',
  },
}));

export default function StyledFormInput({ label, ...props }) {
  return (
    <Stack gap={1}>
      <Typography variant="inherit" color="#fff" fontSize={16} lineHeight="20px" fontWeight={500}>
        {label}
      </Typography>
      <Input {...props} fullWidth />
    </Stack>
  );
}
