import { successMsg } from "@/src/Components/Shared/successMsg";

export const validatedShopType = (data) => {
  const status = {
    status: false,
  };

  if (!data?.name) {
    successMsg("Please provide shoptype name");
    return status;
  }
  if (!data?.activeStatus) {
    successMsg("Please provide shop active status");
    return status;
  }

  return { status: true, data };
};

export const getShopTypeData = (data) => {
  if (data?._id) {
    return { ...data };
  }

  return {
    name: "",
    activeStatus: "",
  };
};

export const initialQueryParams = {
  page: 1,
  pageSize: 15,
  sortBy: "desc",
  searchKey: "",
  // status:'',
};
