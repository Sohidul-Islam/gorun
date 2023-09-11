import { Add } from "@mui/icons-material";
import { Button, Stack, debounce } from "@mui/material";
import React, { useMemo } from "react";
import StyledSearchBar from "../../Styled/StyledSearchBar";
import FilterSelect from "../../Common/Filter/FilterSelect";

function SearchBar({ onAdd, setQueryParams, queryParams }) {
  const updateSearch = useMemo(() =>
    debounce((value) => {
      setQueryParams((prev) => ({
        ...prev,
        searchKey: value,
        page: 1,
      }));
    }, 100)
  );

  const sortOptions = [
    {
      label: "Desc",
      value: "desc",
    },
    {
      label: "Asc",
      value: "asc",
    },
  ];

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={4}>
      <StyledSearchBar
        placeholder="Search..."
        size="small"
        fullWidth={true}
        value={queryParams?.searchKey}
        onChange={(e) => {
          updateSearch(e.target.value);
        }}
      />
      <FilterSelect
        items={sortOptions}
        value={queryParams?.sortBy}
        placeholder="Sort"
        tooltip="Sort"
        size="sm"
        sx={{
          minWidth: "auto",
        }}
        onChange={(e) => {
          setQueryParams((prev) => ({
            ...prev,
            sortBy: e.target.value,
            page: 1,
          }));
        }}
      />
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
