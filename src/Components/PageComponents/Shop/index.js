import { Drawer, Stack } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddShop from "./AddShop";

function ShopContainer() {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <SearchBar
        onAdd={() => {
          setOpen(true);
        }}
      />

      <Drawer open={open} anchor="right">
        <AddShop
          onClose={() => {
            setOpen(false);
          }}
        />
      </Drawer>
    </Stack>
  );
}

export default ShopContainer;
