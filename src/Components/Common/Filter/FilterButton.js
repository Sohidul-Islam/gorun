import { Button, styled } from '@mui/material';
import pxToRem from '../../helpers/pxToRem';

const StyledButton = styled(Button)(({ theme }) => ({
  minHeight: 'auto',
  fontSize: `${pxToRem(12)}rem`,
  fontWeight: 400,
  borderRadius: '50px',
  background: theme.palette.grey[200],
  textTransform: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    background: theme.palette.grey[300],
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: `${pxToRem(12)}rem`,
  },

  [theme.breakpoints.up('xl')]: {
    fontSize: `${pxToRem(14)}rem`,
  },
}));

export default function FilterButton({ sx, label, ...props }) {
  return (
    <StyledButton disableRipple {...props} sx={sx || {}}>
      {label}
    </StyledButton>
  );
}
