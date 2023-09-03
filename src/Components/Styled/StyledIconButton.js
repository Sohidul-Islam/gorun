import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(() => ({
  background: '#F3F6F9',
  borderRadius: '6px!important',
  width: '32px',
  height: '32px',

  '&:hover': {
    background: '#e9eff5',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '16px',
  },
}));

export default StyledIconButton;
