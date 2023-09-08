import React from "react";
import SidebarContainer from "../../Common/SidebarContainerSm";
import { Button, Stack } from "@mui/material";
import StyledFormField from "../../Common/Form/StyledFormField";
import { Add } from "@mui/icons-material";

function AddShop({ onClose }) {
  return (
    <SidebarContainer title={"Add shop"} onClose={onClose}>
      <Stack gap={2} marginBottom={"40px"}>
        <StyledFormField
          intputType={"text"}
          label={"Shop Name"}
          inputProps={{
            placeholder: "Shop name here...",
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Shop Name"}
          inputProps={{
            placeholder: "Shop name here...",
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Business Name"}
          inputProps={{
            placeholder: "Business name here...",
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Business Category"}
          inputProps={{
            placeholder: "Business Category...",
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"NID"}
          inputProps={{
            placeholder: "NID number here...",
          }}
        />
        <StyledFormField
          intputType={"text"}
          label={"Passport"}
          inputProps={{
            placeholder: "Passport number here...",
          }}
        />
        <StyledFormField
          intputType={"file"}
          label={"Shop Logo"}
          inputProps={{
            placeholder: "Passport number here...",
          }}
        />
        <StyledFormField
          intputType={"file"}
          label={"Trade Licence"}
          inputProps={{
            placeholder: "Passport number here...",
          }}
        />

        <Stack
          direction="row"
          justifyContent={"start"}
          alignItems="start"
          mt={7.5}
        >
          <Button
            variant="contained"
            startIcon={<Add />}
            // disabled={addShopType?.isLoading || editShopType?.isLoading}
            // onClick={onSubmitShopTypeHandlerer}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </SidebarContainer>
  );
}

export default AddShop;
