import PageTop from "@/src/Components/Common/PageTop";
import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../Shop/SearchBar";
import AddShopType from "./AddShopType";
import Table from "./Table";
import { useQuery } from "react-query";
import AXIOS from "@/src/network/Axios";
import * as API_URL from "@/src/network/api";
import { initialQueryParams } from "./helpers";

const staticData = [
  { _id: 1, name: "shop Type 1", activeStatus: "online" },
  { _id: 2, name: "shop Type 2", activeStatus: "online" },
];

function ShopTypePage() {
  const [open, setOpen] = useState(false);
  const [queryParams, setQueryParams] = useState({ ...initialQueryParams });

  const getShopType = useQuery(
    [API_URL.GET_SHOP_TYPE, { ...queryParams }],
    () =>
      AXIOS.get(API_URL.GET_SHOP_TYPE, {
        params: { ...queryParams },
      })
  );
  console.log("getShop", getShopType?.data?.data?.shopTypes);
  return (
    <Box>
      <PageTop
        title={"Shop Types"}
        backButtonLabel={"Back"}
        backTo={"/settings"}
        sx={{
          position: "sticky",
          backgroundColor: "#fff",
        }}
      />
      <SearchBar
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        onAdd={() => {
          setOpen(true);
        }}
      />

      <Box mt={7.5}>
        <Table
          rows={
            getShopType?.data?.data?.shopTypes?.length > 0
              ? getShopType?.data?.data?.shopTypes
              : staticData
          }
          loading={getShopType?.isLoading}
        />
      </Box>
      <Drawer open={open} anchor="right">
        <AddShopType
          onClose={() => {
            setOpen(false);
          }}
        />
      </Drawer>
    </Box>
  );
}

export default ShopTypePage;
