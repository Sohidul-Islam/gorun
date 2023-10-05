import StyledTable from "@/src/Components/Styled/StyledTable3";
import { Delete, Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TableSkeleton from "../../Skeleton/TableSkeleton";
import UserAvatar from "@/src/Components/Common/UserAvatar";
import { statusColor } from "../../Shop/Table";

function Table({ rows = [], setCategoryType, setOpen, setConfirm, loading }) {
  const columns = [
    {
      id: 1,
      headerName: "CATEGORY",
      field: "name",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => (
        <UserAvatar
          imgAlt={"categoryImage"}
          imgUrl={row?.image}
          name={row?.name}
        />
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
              setCategoryType(row);
              setOpen(true);
            }}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              setCategoryType(row);
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
