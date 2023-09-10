import StyledFormField from "@/src/Components/Common/Form/StyledFormField";
import SidebarContainer from "@/src/Components/Common/SidebarContainerSm";
import { successMsg } from "@/src/Components/Shared/successMsg";
import AXIOS from "@/src/network/Axios";
import * as API_URL from "@/src/network/api";
import { Add } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getShopTypeData, validatedCategory } from "./helpers";

const typeOptions = [
  {
    label: "Shop Type 1",
    value: "type 1",
  },
  {
    label: "Shop Type 2",
    value: "type 2",
  },
  {
    label: "Shop Type 3",
    value: "type 3",
  },
];

function AddProductType({ onClose, shopTypeData = {} }) {
  const [shopType, setShopType] = useState(getShopTypeData(shopTypeData));
  const onChangeHandler = (e) => {
    setShopType((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addShopType = useMutation(
    (data) => AXIOS.post(API_URL.ADD_CATEGORY, data),
    {
      onSuccess: (data) => {
        if (data?.status) {
          successMsg(data?.message, "success");
        }
      },
    }
  );

  const editShopType = useMutation(
    (data) => AXIOS.post(API_URL.UPDATE_CATEGORY, data),
    {
      onSuccess: (data) => {
        if (data?.status) {
          successMsg(data?.message, "success");
        }
      },
    }
  );

  const onSubmitShopTypeHandlerer = () => {
    const validated = validatedCategory(shopType);

    console.log("shopType", validated);

    if (shopType?._id && validated?.status !== false) {
      editShopType.mutate(validated?.data);
      return;
    }
    if (validated?.status !== false) {
      addShopType.mutate(validated?.data);
    }
  };

  return (
    <SidebarContainer title={"Add Category"} onClose={onClose}>
      <Stack gap={2}>
        <StyledFormField
          intputType={"text"}
          label={"Add Category Name"}
          inputProps={{
            placeholder: "Write category name here",
            name: "name",
            onChange: onChangeHandler,
          }}
        />

        <StyledFormField
          intputType={"select"}
          label={"Select Shop Type"}
          inputProps={{
            items: typeOptions,
            // type: "text",
            name: "image",
            placeholder: "Select shop type",
            onChange: onChangeHandler,
          }}
        />

        <StyledFormField
          intputType={"file"}
          label={"Category Image"}
          inputProps={{
            // type: "text",
            name: "image",
            // placeholder: "Select Status",
            onChange: onChangeHandler,
          }}
        />

        <Stack direction="row" justifyContent={"start"} alignItems="start">
          <Button
            variant="contained"
            startIcon={<Add />}
            disabled={addShopType?.isLoading || editShopType?.isLoading}
            onClick={onSubmitShopTypeHandlerer}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </SidebarContainer>
  );
}

export default AddProductType;
