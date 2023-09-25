import React, { useMemo, useState } from "react";
import SidebarContainer from "../../Common/SidebarContainerSm";
import { Button, Stack } from "@mui/material";
import StyledFormField from "../../Common/Form/StyledFormField";
import { Add, Save } from "@mui/icons-material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as API_URL from "@/src/network/api";
import AXIOS from "@/src/network/Axios";
import { generateShopData, validateShopData } from "./helpers";
import { successMsg } from "../../Shared/successMsg";

const typeOptions = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Offline",
    value: "offline",
  },
  {
    label: "Both",
    value: "both",
  },
];

const statusOptions = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

function AddShop({ onClose, shop }) {
  const [shopData, setShopData] = useState({
    ...shop,
    image: [{ preview: shop?.image }],
    // banners: [{ preview: shop?.banners }],
  });

  const queryClient = useQueryClient();
  const onChangeShopHandler = (e) => {
    setShopData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onDrop = (acceptedFiles, key) => {
    console.log(acceptedFiles, key);
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setShopData((prev) => ({
      ...prev,
      [key]: newFiles,
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

  const updateShopMutation = useMutation(
    (data) => AXIOS.post(API_URL.UPDATE_SHOP, data),
    {
      onSuccess: (data) => {
        if (data?.status) {
          successMsg(data?.message, "success");
          queryClient.invalidateQueries(API_URL.GET_SHOP);
          onClose();
        } else {
          successMsg(data?.message, "error");
        }
      },
    }
  );

  const onSubmitShopData = async () => {
    const validated = validateShopData(shopData);

    if (validated === true) {
      const generatedData = await generateShopData(shopData);

      if (generatedData?.status !== false) {
        updateShopMutation.mutate(generatedData);
      }
    }
  };

  return (
    <SidebarContainer title={"Add shop"} onClose={onClose}>
      <Stack gap={2} marginBottom={"40px"}>
        <StyledFormField
          intputType={"text"}
          label={"Shop Name"}
          inputProps={{
            value: shopData?.name,
            name: "name",
            placeholder: "Shop name here...",
            onChange: onChangeShopHandler,
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Shop Name"}
          inputProps={{
            placeholder: "Shop Owner name here...",
            value: shopData?.shopOwnerName,
            name: "shopOwnerName",
            onChange: onChangeShopHandler,
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Email"}
          inputProps={{
            placeholder: "Email here...",
            value: shopData?.email,
            name: "email",
            onChange: onChangeShopHandler,
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Address"}
          inputProps={{
            placeholder: "Email here...",
            value: shopData?.shopAddress?.address,
            name: "shopAddress",
            onChange: (e) =>
              setShopData((prev) => ({
                ...prev,
                shopAddress: { ...prev?.shopAddress, address: e.target.value },
              })),
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"NID"}
          inputProps={{
            placeholder: "NID here...",
            name: "nid",
            value: shopData?.nid,
            onChange: onChangeShopHandler,
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Passport"}
          inputProps={{
            placeholder: "NID number here...",
            name: "passport",
            value: shopData?.passport,
            onChange: onChangeShopHandler,
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Trade License"}
          inputProps={{
            placeholder: "Passport number here...",
            name: "tradeLicense",
            value: shopData?.tradeLicense,
            onChange: onChangeShopHandler,
          }}
        />
        <StyledFormField
          intputType={"select"}
          label={"Shop Type"}
          inputProps={{
            placeholder: "Shop Type here...",
            items: typeOptions2 || [],
            name: "shopType",
            value: shopData?.shopType,
            onChange: onChangeShopHandler,
          }}
        />

        <StyledFormField
          intputType={"select"}
          label={"Status"}
          inputProps={{
            placeholder: "Select status",
            type: "text",
            items: statusOptions,
            name: "status",
            value: shopData?.status,
            onChange: onChangeShopHandler,
          }}
        />

        <StyledFormField
          intputType={"select"}
          label={"Active Status"}
          inputProps={{
            placeholder: "Shop Type here...",
            type: "text",
            value: shopData?.activeStatus,
            items: typeOptions,
            name: "activeStatus",
            onChange: onChangeShopHandler,
          }}
        />

        <StyledFormField
          intputType={"file"}
          label={"Image"}
          inputProps={{
            // type: "text",
            onDrop: (acceptedFiles) => {
              onDrop(acceptedFiles, "image");
            },
            files: shopData?.image,
            // placeholder: "Select Status",
          }}
        />
        {/* 
        <StyledFormField
          intputType={"file"}
          label={"Banner"}
          inputProps={{
            // type: "text",
            onDrop: (acceptedFiles) => {
              onDrop(acceptedFiles, "banners");
            },
            files: shopData?.banners,
            // placeholder: "Select Status",
          }}
        /> */}

        <Stack
          direction="row"
          justifyContent={"start"}
          alignItems="start"
          mt={7.5}
        >
          <Button
            variant="contained"
            startIcon={<Save />}
            disabled={updateShopMutation?.isLoading}
            onClick={onSubmitShopData}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </SidebarContainer>
  );
}

export default AddShop;
