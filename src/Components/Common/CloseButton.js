import Close from '@mui/icons-material/Close';
import { IconButton, styled } from '@mui/material';

const Button = styled(IconButton)(() => ({
  background: 'transparent',
  '&:hover': {
    background: 'transparent',
    fontSize: '16px',
  },
}));

const sizes = {
  sm: {
    '& .MuiSvgIcon-root': {
      width: '14px',
      height: '14px',
    },
  },
  md: {},
};

export default function CloseButton({ size, sx, ...props }) {
  return (
    <Button
      sx={{
        ...(sizes[size || 'md'] || {}),
        ...(sx || {}),
      }}
      {...props}
    >
      <Close />
    </Button>
  );
}
