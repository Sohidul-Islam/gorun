import React from "react";
import SidebarContainer from "../../Common/SidebarContainerSm";
import { Stack } from "@mui/material";
import StyledFormField from "../../Common/Form/StyledFormField";

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
      </Stack>
    </SidebarContainer>
  );
}

export default AddShop;
