import StyledFormField from "@/src/Components/Common/Form/StyledFormField";
import SidebarContainer from "@/src/Components/Common/SidebarContainerSm";
import { successMsg } from "@/src/Components/Shared/successMsg";
import AXIOS from "@/src/network/Axios";
import * as API_URL from "@/src/network/api";
import { Add } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getCategoryData, validatedCategory } from "./helpers";

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

function AddCategoryType({ onClose, currentCategory = {} }) {
  const [categoryType, setCategoryType] = useState({
    ...getCategoryData(currentCategory),
    _id: currentCategory?._id,
  });

  console.log("categoryType", categoryType);
  const onChangeHandler = (e) => {
    setCategoryType((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const queryClient = useQueryClient();

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setCategoryType((prev) => ({
      ...prev,
      image: newFiles,
    }));
  };

  const getShopType = useQuery([API_URL.GET_SHOP_TYPE], () =>
    AXIOS.get(API_URL.GET_SHOP_TYPE)
  );

  const typeOptions2 = useMemo(() => {
    if (getShopType?.data?.data?.shopTypes?.length > 0) {
      return getShopType?.data?.data?.shopTypes?.map(({ name, _id }) => ({
        label: name,
        value: _id,
      }));
    }
    return [];
  }, [getShopType?.data?.data]);

  const addCategoryType = useMutation(
    (data) => AXIOS.post(API_URL.ADD_CATEGORY, data),
    {
      onSuccess: (data) => {
        if (data?.status) {
          successMsg(data?.message, "success");
          queryClient.invalidateQueries(API_URL.GET_CATEGORY);
          onClose();
        } else {
          successMsg(data?.message, "warn");
        }
      },
    }
  );

  const editCategoryType = useMutation(
    (data) => AXIOS.post(API_URL.UPDATE_CATEGORY, data),
    {
      onSuccess: (data) => {
        if (data?.status) {
          successMsg(data?.message, "success");
          queryClient.invalidateQueries(API_URL.GET_CATEGORY);
          onClose();
        } else {
          successMsg(data?.message, "warn");
        }
      },
    }
  );

  const onSubmitShopTypeHandlerer = async () => {
    const validated = await validatedCategory(categoryType);
    if (currentCategory?._id && validated?.status !== false) {
      editCategoryType.mutate(validated?.data);
      return;
    }

    if (!currentCategory?._id && validated?.status !== false) {
      addCategoryType.mutate(validated?.data);
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
            value: categoryType?.name,
            name: "name",
            onChange: onChangeHandler,
          }}
        />

        <StyledFormField
          intputType={"select"}
          label={"Select Shop Type"}
          inputProps={{
            items: typeOptions2 || [],
            // type: "text"
            value: categoryType?.shopTypeId,
            name: "shopTypeId",
            placeholder: "Select shop type",
            onChange: onChangeHandler,
          }}
        />

        <StyledFormField
          intputType={"file"}
          label={"Category Image"}
          inputProps={{
            // type: "text",
            onDrop,
            files: categoryType?.image,
            // placeholder: "Select Status",
          }}
        />

        <Stack direction="row" justifyContent={"start"} alignItems="start">
          <Button
            variant="contained"
            startIcon={<Add />}
            disabled={addCategoryType?.isLoading || editCategoryType?.isLoading}
            onClick={onSubmitShopTypeHandlerer}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </SidebarContainer>
  );
}

export default AddCategoryType;
