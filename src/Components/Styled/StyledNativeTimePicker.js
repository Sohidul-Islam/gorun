import { ExpandMore } from '@mui/icons-material';
import { InputAdornment, TextField, styled } from '@mui/material';

const StyledInput = styled(TextField)(({ theme }) => ({
  maxWidth: 190,

  '& .MuiOutlinedInput-root': {
    padding: '12px 10px 12px 22px',
    maxWidth: '190px',
    borderRadius: '45px',
    background: theme.palette.background.secondary,

    '&:hover': {
      background: theme.palette.background.secondaryHover,
    },
  },

  '& .MuiInputBase-input': {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '0',
    marginRight: '-25px',
  },

  '& .MuiInputBase-root': {
    '& .MuiButtonBase-root': {
      padding: '0px',
      margin: '0px',

      '&:hover': {
        background: 'transparent',
      },
    },

    '&.Mui-disabled': {
      pointerEvents: 'none',
    },
  },

  '& fieldSet': {
    border: '0',
  },

  '& .MuiInputAdornment-root': {
    pointerEvents: 'none',
  },
}));

export default function StyledNativeTimePicker({ ...props }) {
  return (
    <StyledInput
      type="time"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <ExpandMore />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
