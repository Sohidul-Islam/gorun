import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function PageButton({ label, to, sx, ...props }) {
  const history = useHistory();

  return (
    <Button
      disableRipple
      sx={{
        fontWeight: '500',
        fontSize: '17px',
        lineHeight: '28px',
        textDecorationLine: 'underline',
        textUnderlineOffset: '2px',
        padding: '0px',
        gap: '11px',

        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          margin: '0px',
        },

        ...sx,
      }}
      variant="text"
      color="primary"
      onClick={() => {
        if (to) {
          history.push(to);
        }
      }}
      {...props}
    >
      {label}
    </Button>
  );
}
