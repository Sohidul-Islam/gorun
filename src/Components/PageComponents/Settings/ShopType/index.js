import PageTop from "@/src/Components/Common/PageTop";
import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../Shop/SearchBar";
import AddShopType from "./AddShopType";
import Table from "./Table";
import { useMutation, useQuery, useQueryClient } from "react-query";
import AXIOS from "@/src/network/Axios";
import * as API_URL from "@/src/network/api";
import { initialQueryParams } from "./helpers";
import ConfirmModal from "@/src/Components/Common/ConfirmModal";
import { successMsg } from "@/src/Components/Shared/successMsg";

const staticData = [
  { _id: 1, name: "shop Type 1", activeStatus: "online" },
  { _id: 2, name: "shop Type 2", activeStatus: "online" },
];

function ShopTypePage() {
  const [open, setOpen] = useState(false);

  const [queryParams, setQueryParams] = useState({ ...initialQueryParams });

  const [currentShopType, setCurrentShopType] = useState({});

  const [isConfirm, setIsConfirm] = useState(false);

  const queryClient = useQueryClient();

  const getShopType = useQuery(
    [API_URL.GET_SHOP_TYPE, { ...queryParams }],
    () =>
      AXIOS.get(API_URL.GET_SHOP_TYPE, {
        params: { ...queryParams },
      })
  );

  const deleteShopType = useMutation(
    (data) => AXIOS.post(API_URL.DELETE_SHOP_TYPE, data),
    {
      onSuccess: (data) => {
        if (data?.status) {
          successMsg(data?.message, "success");
          queryClient.invalidateQueries(API_URL.GET_SHOP_TYPE);
          setIsConfirm(false);
        } else {
          successMsg(data?.message, "error");
        }
      },
    }
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
          setCurrentShopType={setCurrentShopType}
          setOpen={setOpen}
          rows={getShopType?.data?.data?.shopTypes}
          loading={getShopType?.isLoading}
          setConfirm={setIsConfirm}
        />
      </Box>
      <Drawer open={open} anchor="right">
        <AddShopType
          shopTypeData={currentShopType}
          onClose={() => {
            setOpen(false);
            setCurrentShopType({});
          }}
        />
      </Drawer>

      <ConfirmModal
        isOpen={isConfirm}
        message="Are you sure you want to delete this type?"
        onCancel={() => {
          setIsConfirm(false);
        }}
        loading={deleteShopType?.isLoading}
        onConfirm={() => {
          deleteShopType.mutate({ shopTypeId: currentShopType?._id });
        }}
      />
    </Box>
  );
}

export default ShopTypePage;
