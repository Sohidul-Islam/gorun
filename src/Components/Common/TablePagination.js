import { Pagination, Stack } from '@mui/material';
import React from 'react';

export default function TablePagination({ currentPage, lisener, totalPage }) {
  return (
    <Stack direction="row" justifyContent="end" sx={{ marginTop: '20px' }}>
      <Pagination
        count={totalPage || 1}
        page={currentPage}
        onChange={(event, value) => {
          lisener(value);
        }}
        shape="circular"
        siblingCount={0}
        showFirstButton
        showLastButton
        variant="outlined"
      />
    </Stack>
  );
}
