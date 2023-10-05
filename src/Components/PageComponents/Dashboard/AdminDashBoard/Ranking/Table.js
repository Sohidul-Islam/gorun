import UserAvatar from "@/src/Components/Common/UserAvatar";
import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import TableSkeleton from "../../../Skeleton/TableSkeleton";
import StyledTable from "@/src/Components/Styled/StyledTable3";
import TablePagination from "@/src/Components/Common/TablePagination";
import Rating from "@/src/Components/Common/Rating";

function Table({ loading, queryParams, setQueryParams, data }) {
  const column = [
    {
      id: 1,
      headerName: "",
      field: "rowNumber",
      flex: 1,
      sortable: false,
      maxWidth: 90,
      renderCell: ({ value }) => (
        <Typography variant="body4">{value}</Typography>
      ),
    },

    {
      id: 2,
      headerName: "Name",
      field: "shopName",
      flex: 1.5,
      minWidth: 150,
      sortable: false,
      renderCell: ({ row }) => (
        <UserAvatar
          imgAlt="logo"
          imgUrl={row?.shopLogo}
          imgStyle="circular"
          titleProps={{
            sx: { color: "primary.main", cursor: "pointer" },
            onClick: () => {
              history?.push({
                pathname: `/shop/profile/${row?._id}`,
                state: {
                  from: routeMatch?.path,
                  backToLabel: "Back to Sales Dashboard",
                },
              });
            },
          }}
          imgFallbackCharacter={row?.shopName?.charAt(0)}
          name={row?.shopName}
        />
      ),
    },
    {
      id: 3,
      sortable: false,
      headerName: "SELLER",
      field: "sellerName",
      flex: 1.5,
      minWidth: 150,
      renderCell: ({ value }) => (
        <Typography variant="body4">{value}</Typography>
      ),
    },
    {
      id: 4,
      sortable: false,
      headerName: "# ITEM SOLD",
      field: "itemsSold",
      flex: 1.3,
      renderCell: ({ value }) => (
        <Typography variant="body4">{value}</Typography>
      ),
    },
    {
      id: 5,
      sortable: false,
      headerName: "RATING",
      field: "rating",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => <Rating amount={value} />,
    },
    {
      id: 6,
      sortable: false,
      headerName: `PROFIT`,
      field: "profit",
      flex: 1,
      align: "right",
      minWidth: 100,
      headerAlign: "right",
      renderCell: ({ value }) => (
        <Typography variant="body4">
          {"$"}
          {(value || 0).toFixed(2)}
        </Typography>
      ),
    },
  ];
  return (
    <Box>
      {loading && (
        <TableSkeleton
          columns={["text", "avatar", "text", "text", "text", "text"]}
          rows={3}
        />
      )}
      {!loading && (
        <>
          <Box
            sx={{
              pr: 5,
              pl: 3.5,
              pt: 4,
              pb: 1,
            }}
          >
            <StyledTable
              columns={column}
              rows={
                data?.map((s, i) => {
                  s.rowNumber = i + 1;
                  return s;
                }) || []
              }
              getRowId={(row) => row?._id}
              sx={{
                "& .MuiDataGrid-row": {
                  backgroundColor: "transparent !important",
                },
              }}
              rowHeight={71}
              components={{
                NoRowsOverlay: () => (
                  <Stack
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    No Shops found
                  </Stack>
                ),
              }}
            />
          </Box>
          <TablePagination
            currentPage={queryParams?.shopPage}
            lisener={(shopPage) => {
              if (setQueryParams)
                setQueryParams((prev) => ({ ...prev, shopPage }));
              console.log("log");
            }}
            totalPage={queryParams?.totalPageShop || 1}
          />
        </>
      )}
    </Box>
  );
}

export default Table;
