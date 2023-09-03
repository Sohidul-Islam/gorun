import { Add } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";
import StyledSearchBar from "../../Styled/StyledSearchBar";

function SearchBar({ onAdd }) {
  return (
    <Stack direction={"row"} gap={4}>
      <StyledSearchBar placeholder="Search..." size="small" fullWidth={true} />
      <Button
        startIcon={<Add />}
        size="small"
        variant="contained"
        color="primary"
        onClick={onAdd}
      >
        Add
      </Button>
    </Stack>
  );
}

export default SearchBar;
