import { getImageUrl } from "@/src/Components/Shared/image";
import { successMsg } from "@/src/Components/Shared/successMsg";

export const validatedCategory = async (data) => {
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

  if (!data?.image?.length) {
    successMsg("Please add image");
    return status;
  }

  let imageUrl = "";

  if (data?.image?.length) {
    successMsg("Please wait untill image uploading");
    imageUrl = await getImageUrl(data?.image[0]);

    if (!imageUrl) {
      return { status: false, message: "Image not upload" };
    }
  }

  const categoryId = data?._id;

  return {
    status: true,
    data: data?._id
      ? { ...data, image: imageUrl, categoryId }
      : { ...data, image: imageUrl },
  };
};

export const getCategoryData = (data) => {
  if (data?._id) {
    const shopTypeId = data?.shopType;
    delete data?.shopType;
    console.log("data get", data);
    return { ...data, image: [{ preview: data?.image }], shopTypeId };
  }

  return {
    name: "",
    shopTypeId: "",
    image: [],
  };
};

export const initialQueryParams = {
  page: 1,
  pageSize: 15,
  sortBy: "desc",
  searchKey: "",
  // status:'',
};
