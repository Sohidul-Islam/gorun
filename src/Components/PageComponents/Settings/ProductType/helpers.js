import { successMsg } from "@/src/Components/Shared/successMsg";

export const validatedCategory = (data) => {
  const status = {
    status: false,
  };

  if (!data?.name) {
    successMsg("Please provide category name");
    return status;
  }

  if (!data?.shopTypeId) {
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
    const shopTypeId = data?.shopType;
    delete data?.shopType;
    return { ...data, shopTypeId };
  }

  return {
    name: "",
    shopTypeId: "",
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
