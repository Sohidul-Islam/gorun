import StyledTable from "@/src/Components/Styled/StyledTable3";
import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import TableSkeleton from "../../Skeleton/TableSkeleton";

function Table({
  rows = [],
  loading,
  setCurrentShopType,
  setOpen,
  setConfirm,
}) {
  const columns = [
    {
      id: 1.5,
      headerName: "SHOP TYPE",
      field: "name",
      flex: 1,
      sortable: false,
      renderCell: ({ value }) => (
        <Typography variant="body4">{value}</Typography>
      ),
    },
    {
      id: 1,
      headerName: "STATUS",
      field: "activeStatus",
      flex: 1,
      sortable: false,
      renderCell: ({ value }) => (
        <Typography variant="body4">{value}</Typography>
      ),
    },
    {
      id: 1,
      headerName: "ACTION",
      field: "action",
      flex: 1,
      headerAlign: "right",
      align: "right",
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <IconButton
            color="primary"
            onClick={() => {
              setCurrentShopType(row);
              setOpen(true);
            }}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              setCurrentShopType(row);
              setConfirm(true);
            }}
          >
            <Delete />
          </IconButton>
        </Stack>
      ),
    },
  ];
  if (loading)
    return <TableSkeleton columns={["text", "text", "text"]} rows={5} />;
  return (
    <Box
      sx={{
        pr: 5,
        pl: 3.5,
        pt: 1,
        pb: 1,
        border: "1px solid #EEEEEE",
        borderRadius: "7px",
        background: "#fff",
        position: "relative",
        // maxWidth: "1536px",
        // overflow: "auto",
      }}
    >
      <StyledTable
        columns={columns}
        rows={rows}
        getRowId={(row) => row?._id}
        rowHeight={71}
        sx={{
          "& .MuiDataGrid-row": {
            backgroundColor: "transparent !important",
          },
        }}
        components={{
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              No result found
            </Stack>
          ),
        }}
      />
    </Box>
  );
}

export default Table;
