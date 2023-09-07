import SearchBar from "@/src/Components/Common/CommonSearchbar";
import PageList from "@/src/Components/Common/PageList";
import PageTop from "@/src/Components/Common/PageTop";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const getPageList = () => [
  {
    label: "Shop Type",
    to: "/settings/shopType",
  },
  {
    label: "Product Category",
    to: "/settings/productType",
  },
];

const filterPages = (searchKey, pages) => {
  if (searchKey === "") return pages;

  return pages.filter((page) =>
    page?.label
      ?.toLowerCase()
      .includes(
        searchKey.toLowerCase() ||
          page?.to?.toLowerCase().includes(searchKey.toLowerCase())
      )
  );
};

function settings() {
  const [list, setList] = useState(getPageList());
  const [queryParams, setQueryParams] = useState({ searchKey: "" });

  useEffect(() => {
    setList(filterPages(queryParams?.searchKey, getPageList()));
  }, [queryParams?.searchKey]);
  return (
    <Box>
      <PageTop title="Settings" subtitle="Customize admin settings" />
      <Box pb={6.5}>
        <SearchBar
          queryParams={queryParams}
          setQueryParams={setQueryParams}
          showFilters={{ search: true }}
          searchPlaceHolder="Search Setting..."
        />
      </Box>
      <PageList items={list} />
    </Box>
  );
}

export default settings;
