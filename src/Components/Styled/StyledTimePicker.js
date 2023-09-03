/* eslint-disable no-unused-vars */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const StyledInput = styled(TimePicker)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    padding: '12px 15px 12px 22px',
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
}));

const sizes = {
  sm: {
    root: {
      '& .MuiOutlinedInput-root': {
        padding: '12px 15px 12px 20px',
      },

      '& .MuiInputBase-input': {
        width: '74px',
      },
    },
  },
};

export default function StyledTimePicker({ sx, size, ...props }) {
  return (
    <StyledInput
      components={{
        OpenPickerIcon: ExpandMoreIcon,
      }}
      // renderInput={(params) => (
      //   <StyledInput
      //     sx={{
      //       ...(sizes[size]?.root || {}),
      //       ...(sx || {}),
      //     }}
      //     {...params}
      //   />
      // )}
      {...props}
    />
  );
}
