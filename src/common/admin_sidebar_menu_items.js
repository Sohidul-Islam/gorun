import {
  BarChart,
  Dashboard,
  Person,
  Settings,
  Shop,
  ShoppingCart,
} from "@mui/icons-material";

export const admin_menu_items = [
  {
    title: "Management",
    menu: [
      {
        label: "Dashboard",
        icon: Dashboard,
        to: "/",
      },
      {
        label: "Orders",
        icon: ShoppingCart,
        to: "/orders",
      },

      {
        label: "Shops",
        to: "/shop",
        icon: Shop,
      },
      {
        label: "Users",
        to: "/users",
        icon: Person,
      },

      {
        label: "Settings",
        to: "/settings",
        icon: Settings,
      },
      {
        label: "Financials",
        to: "/financials",
        icon: BarChart,
      },
    ],
  },
];
