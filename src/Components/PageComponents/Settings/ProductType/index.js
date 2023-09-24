import PageTop from "@/src/Components/Common/PageTop";
import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../Shop/SearchBar";
import AddCategoryType from "./AddProductType";
import Table from "./Table";
import { useMutation, useQuery, useQueryClient } from "react-query";
import AXIOS from "@/src/network/Axios";
import * as API_URL from "@/src/network/api";
import { initialQueryParams } from "./helpers";
import ConfirmModal from "@/src/Components/Common/ConfirmModal";
import { successMsg } from "@/src/Components/Shared/successMsg";

const staticData = [
  { _id: 1, name: "Product Type 1", activeStatus: "online" },
  { _id: 2, name: "Product Type 2", activeStatus: "online" },
];

function CategoryType() {
  const [open, setOpen] = useState(false);

  const [queryParams, setQueryParams] = useState({ ...initialQueryParams });

  const [currentCategory, setCategoryType] = useState({});

  const [isConfirm, setIsConfirm] = useState(false);

  const queryClient = useQueryClient();

  const getShopType = useQuery([API_URL.GET_CATEGORY, { ...queryParams }], () =>
    AXIOS.get(API_URL.GET_CATEGORY, {
      params: { ...queryParams },
    })
  );

  const deleteCategoryType = useMutation(
    (data) => AXIOS.post(API_URL.DELETE_CATEGORY, data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(API_URL.GET_CATEGORY);
        console.log("data?.status", data?.status);
        if (data?.status) {
          successMsg(data?.message, "success");
          setIsConfirm(false);
        } else {
          successMsg(data?.message, "warn");
        }
      },
    }
  );

  console.log("getShop", getShopType?.data?.data?.categories);
  return (
    <Box>
      <PageTop
        title={"Categories"}
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
          rows={getShopType?.data?.data?.categories}
          loading={getShopType?.isLoading}
          setCategoryType={setCategoryType}
          setOpen={setOpen}
          setConfirm={setIsConfirm}
        />
      </Box>
      <Drawer open={open} anchor="right">
        <AddCategoryType
          currentCategory={currentCategory}
          onClose={() => {
            setOpen(false);
            setCategoryType({});
          }}
        />
      </Drawer>

      <ConfirmModal
        isOpen={isConfirm}
        message="Are you sure you want to delete this type?"
        onCancel={() => {
          setIsConfirm(false);
        }}
        loading={deleteCategoryType?.isLoading}
        onConfirm={() => {
          deleteCategoryType.mutate({ categoryId: currentCategory?._id });
        }}
      />
    </Box>
  );
}

export default CategoryType;
