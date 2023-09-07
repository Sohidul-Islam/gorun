import { Box, Button, Stack } from "@mui/material";
import { debounce } from "@mui/material/utils";
import moment from "moment";
import { useMemo } from "react";

import StyledDateRangePicker from "../Styled/StyledDateRangePicker";
import StyledSearchBar from "../Styled/StyledSearchBar";

import FilterSelect from "./Filter/FilterSelect";
import ThreeDotsMenu from "./ThreeDotsMenu2";

const sortOptions = [
  {
    label: "Desc",
    value: "DESC",
  },
  {
    label: "Asc",
    value: "ASC",
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

export default function SearchBar({
  searchPlaceHolder,
  searchDebounceTime = 300,
  searchDefaultValue,
  queryParams,
  setQueryParams,
  showFilters,
  onButtonClick,
  buttonLabel,
  menuHandler,
  menuItems,
  MenuButton,
  customSelectOptions,
  customSelectValue,
  customSelectPlaceholder,
}) {
  const updateSearch = useMemo(
    () =>
      debounce((e) => {
        setQueryParams((prev) => ({
          ...prev,
          searchKey: e.target.value,
          page: 1,
        }));
      }, searchDebounceTime),
    []
  );

  return (
    <Stack direction="row" alignItems="center" gap="20px">
      {showFilters?.search && (
        <StyledSearchBar
          defaultValue={searchDefaultValue}
          fullWidth
          placeholder={searchPlaceHolder}
          onChange={(e) => {
            updateSearch(e);
          }}
        />
      )}
      {showFilters?.date && (
        <StyledDateRangePicker
          startDate={
            queryParams.startDate === "null"
              ? null
              : moment(queryParams.startDate)
          }
          endDate={
            queryParams.endDate === "null" ? null : moment(queryParams.endDate)
          }
          onChange={({ startDate, endDate }) => {
            console.log({ startDate, moment: moment(startDate) });
            setQueryParams((prev) => ({
              ...prev,
              startDate: startDate?.format("YYYY-MM-DD"),
              endDate: endDate?.format("YYYY-MM-DD"),
              page: 1,
            }));
          }}
        />
      )}
      {/* sort */}
      {showFilters?.sort && (
        <FilterSelect
          items={sortOptions}
          value={queryParams.sortBy}
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
      )}
      {/* status */}
      {showFilters?.status && (
        <FilterSelect
          items={statusOptions}
          value={queryParams.status}
          placeholder="Status"
          tooltip="Status"
          size="sm"
          sx={{
            minWidth: "auto",
          }}
          onChange={(e) => {
            setQueryParams((prev) => ({
              ...prev,
              status: e.target.value,
              page: 1,
            }));
          }}
        />
      )}
      {/* custom */}
      {showFilters?.customSelect && (
        <FilterSelect
          items={customSelectOptions}
          value={queryParams[customSelectValue]}
          placeholder={customSelectPlaceholder}
          tooltip={customSelectPlaceholder}
          size="sm"
          sx={{
            minWidth: "auto",
          }}
          onChange={(e) => {
            setQueryParams((prev) => ({
              ...prev,
              [customSelectValue]: e.target.value,
              page: 1,
            }));
          }}
        />
      )}
      {/* button */}
      {showFilters?.button && (
        <Box flexShrink={0}>
          <Button variant="contained" size="small" onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        </Box>
      )}
      {/* menu */}
      {showFilters?.menu && (
        <ThreeDotsMenu
          handleMenuClick={menuHandler}
          menuItems={menuItems}
          ButtonComponent={MenuButton}
        />
      )}
    </Stack>
  );
}
