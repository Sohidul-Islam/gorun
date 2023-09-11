import { successMsg } from "@/src/Components/Shared/successMsg";

export const validatedCategory = (data) => {
  const status = {
    status: false,
  };

  if (!data?.name) {
    successMsg("Please provide category name");
    return status;
  }

  if (!data?.shopType) {
    successMsg("Please select shoptype");
    return status;
  }

  if (data?._id) {
    const categoryId = data?._id;
    delete data?._id;
    return { status: true, data: { ...data, categoryId } };
  }

  return { status: true, data };
};

export const getCategoryData = (data) => {
  if (data?._id) {
    return { ...data };
  }

  return {
    name: "",
    shopType: "",
    status: "active",
    image: "https://source.unsplash.com/random",
  };
};

export const initialQueryParams = {
  page: 1,
  pageSize: 15,
  sortBy: "desc",
  searchKey: "",
  // status:'',
};
