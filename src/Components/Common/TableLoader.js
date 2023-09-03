import { Box, styled } from '@mui/material';
import CircularLoader from '../CircularLoader';

const LoaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  background: theme.palette.custom.tableLoader,
  left: '0',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9,
}));

export default function TableLoader() {
  return (
    <LoaderContainer>
      <CircularLoader />
    </LoaderContainer>
  );
}
