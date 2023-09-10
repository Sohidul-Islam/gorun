import PageTop from "@/src/Components/Common/PageTop";
import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../Shop/SearchBar";
import AddCategoryType from "./AddProductType";
import Table from "./Table";
import { useQuery } from "react-query";
import AXIOS from "@/src/network/Axios";
import * as API_URL from "@/src/network/api";
import { initialQueryParams } from "./helpers";

const staticData = [
  { _id: 1, name: "Product Type 1", activeStatus: "online" },
  { _id: 2, name: "Product Type 2", activeStatus: "online" },
];

function CategoryType() {
  const [open, setOpen] = useState(false);

  const [queryParams, setQueryParams] = useState({ ...initialQueryParams });

  const [currentShopCategory, setCurrentShopCategory] = useState({});

  const getShopType = useQuery([API_URL.GET_CATEGORY, { ...queryParams }], () =>
    AXIOS.get(API_URL.GET_CATEGORY, {
      params: { ...queryParams },
    })
  );

  console.log("getShop", getShopType?.data?.data?.categories);
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
            getShopType?.data?.data?.categories?.length > 0
              ? getShopType?.data?.data?.categories
              : staticData
          }
          loading={getShopType?.isLoading}
        />
      </Box>
      <Drawer open={open} anchor="right">
        <AddCategoryType
          currentShopCategory={currentShopCategory}
          onClose={() => {
            setOpen(false);
            setCurrentShopCategory({});
          }}
        />
      </Drawer>
    </Box>
  );
}

export default CategoryType;
