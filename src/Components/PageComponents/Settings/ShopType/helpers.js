import { getImageUrl } from "@/src/Components/Shared/image";
import { successMsg } from "@/src/Components/Shared/successMsg";

export const validatedShopType = async (data) => {
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

  if (data?._id) {
    const shopTypeId = data?._id;
    return { status: true, data: { ...data, image: imageUrl, shopTypeId } };
  }

  return { status: true, data: { ...data, image: imageUrl } };
};

export const getShopTypeData = (data) => {
  if (data?._id) {
    return { ...data, image: [{ preview: data?.image }] };
  }

  return {
    name: "",
    activeStatus: "",
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
