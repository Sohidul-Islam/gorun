import { Box } from '@mui/material';
import Spinner from './Spinner';

export default function LoadingOverlay({ sx, spinner, ...props }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, .6)',
        zIndex: '9999',
        borderRadius: '7px',
        ...(sx || {}),
      }}
      {...props}
    >
      {spinner && <Spinner />}
    </Box>
  );
}
