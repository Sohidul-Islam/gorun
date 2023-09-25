import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import TableSkeleton from "../Skeleton/TableSkeleton";
import StyledTable from "../../Styled/StyledTable3";
import { Delete, Edit } from "@mui/icons-material";
import UserAvatar from "../../Common/UserAvatar";

const statusColor = {
  inactive: {
    color: "danger",
    label: "Inactive",
  },
  active: {
    color: "primary",
    label: "Active",
  },
};

function Table({ rows = [], loading, setShop, setOpen, setConfirm }) {
  const columns = [
    {
      id: 1.5,
      headerName: "NAME",
      field: "name",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => (
        <UserAvatar name={row?.name} imgUrl={row?.image} imgAlt={"S"} />
      ),
    },
    {
      id: 1,
      headerName: "STATUS",
      field: "status",
      flex: 1,
      sortable: false,
      renderCell: ({ value }) => (
        <Chip
          label={statusColor[value].label}
          color={statusColor[value].color}
          variant="outlined"
        />
      ),
    },
    {
      id: 1.5,
      headerName: "OWNER NAME",
      field: "shopOwnerName",
      flex: 1,
      sortable: false,
      renderCell: ({ value }) => (
        <Typography variant="body4">{value}</Typography>
      ),
    },
    {
      id: 1.5,
      headerName: "PHONE",
      field: "phoneNumber",
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
              setShop(row);
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
        mt: "28px",
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
