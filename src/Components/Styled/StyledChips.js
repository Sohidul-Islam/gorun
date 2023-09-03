import { Chip, styled } from '@mui/material';

const CustomChip = styled(Chip)(({ theme }) => ({
  background: theme.palette.background.secondary,
  borderRadius: '30px',
  padding: '12px 30px',
  height: 'auto',
  gap: '12px',

  '& .MuiChip-label': {
    padding: '0',
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: '24px',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '17px',
    color: '#3F4254',
    margin: '0',

    '&:hover': {
      color: '#3F4254',
      opacity: '.7',
    },
  },
}));

const sizes = {
  lg: {
    padding: '12px 21px',

    '& .MuiChip-label': {
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '24px',
    },
  },
};

export default function StyledChip({ sx, size, ...props }) {
  return (
    <CustomChip
      sx={{
        ...(sizes[size] || {}),
        ...(sx || {}),
      }}
      {...props}
    />
  );
}
