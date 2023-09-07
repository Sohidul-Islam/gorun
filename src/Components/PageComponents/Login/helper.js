import AXIOS from "@/src/network/Axios";
import { API_URL } from "@/src/network/api";

export const businessAccountTypes = [
  {
    value: "seller",
    label: "Seller Account",
  },
  {
    value: "shop",
    label: "Shop Account",
  },
];

export const adminAccountTypes = [
  {
    value: "admin",
    label: "Super Admin",
  },
  // {
  //   value: "sales",
  //   label: "Sales Manager",
  // },
  // {
  //   value: "accountManager",
  //   label: "Account Manager",
  // },
  // {
  //   value: "customerService",
  //   label: "Customer Service",
  // },
];

export const credentialsInit = {
  password: "",
  email: "",
};

export const validateEmail = (email) =>
  email?.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/);

export const validateForm = (data, touched, errors, setErrors) => {
  let email;
  let password;

  if (!data?.email?.trim()) {
    email = "Email is required";
  }

  if (
    !data?.email?.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/) &&
    !email
  ) {
    email = "Email is not valid";
  }

  if (!data?.password?.trim()) {
    password = "Password is required";
  }

  if (data?.password?.trim()?.length < 6 && !password) {
    password = "Password is has to be atleast 6 chars";
  }

  if (!touched.email) email = undefined;
  if (!touched.password) password = undefined;
  setErrors({ email, password });

  return email || password;
};

export const getParentUser = async (credentialUser) => {
  const api = credentialUser?.parentShop ? Api.SINGLE_SHOP : Api.SINGLE_SELLER;
  const id = credentialUser?.parentShop || credentialUser?.parentSeller;
  const key = credentialUser?.parentShop ? "shop" : "seller";

  try {
    const response = await AXIOS.get(api, {
      params: {
        id,
      },
    });

    // api response false
    if (!response?.status || !response?.data || !response?.data[key]) {
      return { status: false, message: response?.message, parentUser: null };
    }

    return {
      status: true,
      message: response?.message,
      parentUser: response?.data[key],
    };
  } catch (error) {
    console.log(error);
    return { status: false, message: error?.message, parentUser: null };
  }
};

// export const businessAccountTypes = [
//   {
//     label: 'Seller',
//     value: 'seller',
//   },
//   {
//     label: 'Shop',
//     value: 'shop',
//   },
// ];
