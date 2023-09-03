// thrid party
import { Pagination, Stack } from '@mui/material';

export default function AppPagination({ totalPage, lisener, currentPage }) {
  return (
    <Stack direction="row" justifyContent="center">
      <Pagination
        color="primary"
        count={totalPage || 1}
        page={currentPage}
        onChange={(event, value) => {
          lisener(value);
        }}
        shape="circular"
        variant="outlined"
      />
    </Stack>
  );
}
