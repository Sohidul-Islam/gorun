import { Drawer, Stack } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddShop from "./AddShop";
import Table from "./Table";
import { useQuery } from "react-query";
import * as API_URL from "@/src/network/api";
import { initialQueryParams } from "./../Settings/ShopType/helpers";
import PageTop from "../../Common/PageTop";
import AXIOS from "@/src/network/Axios";

function ShopContainer() {
  const [open, setOpen] = useState(false);

  const [queryParams, setQueryParams] = useState({ ...initialQueryParams });

  const [shop, setShop] = useState({});

  const getShopQuery = useQuery([API_URL.GET_SHOP, { queryParams }], () =>
    AXIOS.get(API_URL.GET_SHOP, { params: { ...queryParams } })
  );

  console.log("getShopQuery", getShopQuery?.data?.data);
  return (
    <Stack>
      <PageTop
        title={"Shop List"}
        sx={{
          position: "sticky",
          backgroundColor: "#fff",
        }}
      />

      <SearchBar
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        onAdd={() => {
          setOpen(true);
        }}
      />

      <Table
        rows={getShopQuery?.data?.data?.shops}
        setShop={setShop}
        setOpen={setOpen}
        loading={getShopQuery?.isLoading}
      />

      <Drawer open={open} anchor="right">
        <AddShop
          shop={shop}
          onClose={() => {
            setOpen(false);
          }}
        />
      </Drawer>
    </Stack>
  );
}

export default ShopContainer;
