import { Box } from "@mui/material";
import { useMemo, useState } from "react";

// import { ToastContainer } from "react-toastify";
// import {
//   account_manager_menu_items,
//   admin_menu_items,
//   customer_service_menu_items,
//   sales_manager_menu_items,
//   seller_menu_items,
//   shop_menu_items,
// } from "../../common/sidebar_menu_items";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { admin_menu_items } from "../../common/admin_sidebar_menu_items";

const getRouteAndSidebarItems = (
  userType,
  adminType,
  shopDeliveryType,
  shopType,
  prefix = ""
) => {
  let routes = [];
  let menuItems = [];

  if (userType === "shop") {
    routes = shop_routes(prefix, shopDeliveryType);
    menuItems = shop_menu_items(prefix, shopDeliveryType, shopType);
  }

  if (userType === "seller") {
    routes = seller_routes(prefix);
    menuItems = seller_menu_items(prefix);
  }

  if (userType === "admin" && adminType === "admin") {
    routes = admin_routes;
    menuItems = admin_menu_items;
  }
  if (userType === "admin" && adminType === "accountManager") {
    routes = account_manager_routes;
    menuItems = account_manager_menu_items;
  }
  if (userType === "admin" && adminType === "sales") {
    routes = sales_manager_routes;
    menuItems = sales_manager_menu_items;
  }

  if (userType === "admin" && adminType === "customerService") {
    routes = customer_service_routes;
    menuItems = customer_service_menu_items;
  }

  return { routes, menuItems };
};

export default function Layout({ children }) {
  const [sidebar, setSidebar] = useState(false);
  // const { routes, menuItems } = useMemo(
  //   () =>
  //     getRouteAndSidebarItems(
  //       currentUser?.userType,
  //       currentUser?.adminType,
  //       currentUser?.shop?.haveOwnDeliveryBoy ? "self" : "drop",
  //       // eslint-disable-next-line prettier/prettier
  //       currentUser?.shop?.shopType
  //     ),
  //   // eslint-disable-next-line prettier/prettier
  //   [currentUser?.userType]
  // );

  // const location = useLocation();

  // // check and update route depth
  // useEffect(() => {
  //   console.log(location);
  //   // admin
  //   if (currentUser?.userType === 'admin') {

  //   } else if (currentUser?.userType === 'seller') {
  //   }
  // }, [location]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <Topbar sidebar={sidebar} setSidebar={setSidebar} />
      <Box position="relative">
        <Sidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
          menuItems={admin_menu_items}
          title={"Admin"}
          variant="parent"
        />
        <Box
          sx={{
            paddingLeft: "50px",
            paddingRight: "50px",
            height: "calc(100vh - 67px)",
            overflowY: "scroll",
            backgroundColor: "#fbfbfb",
          }}
        >
          {children}
        </Box>
        {/* <ToastContainer /> */}
      </Box>
    </Box>
  );
}
