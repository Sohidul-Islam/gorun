import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const StyledGrid2 = styled(DataGrid)(({ theme }) => ({
  border: `1px solid ${theme.palette.custom.border}`,
  borderRadius: '7px',
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',

  '& .MuiDataGrid-columnHeaders': {
    borderBottom: `1px solid ${theme.palette.custom.border}`,
  },
  '& .MuiDataGrid-columnHeader': {
    padding: '0 16px',

    '&:focus-within': {
      outline: 'none',
    },
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '19px',
      fontWeight: 600,
    },

    color: theme.palette.text.primary,
  },
  '& .MuiDataGrid-footerContainer': {
    display: 'none',
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: 'transparent!important',
  },
  '& .MuiDataGrid-cell': {
    fontSize: '17px',
    borderBottom: `0px`,

    '&:focus-within': {
      outline: 'none',
    },
  },
}));

export default function StyledTable({ ...props }) {
  return (
    <StyledGrid2
      density="standard"
      headerHeight={46}
      autoHeight
      disableColumnMenu
      disableSelectionOnClick
      hideFooterPagination
      {...props}
    />
  );
}
