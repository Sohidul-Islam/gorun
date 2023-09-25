import { getImageUrl } from "../../Shared/image";
import { successMsg } from "../../Shared/successMsg";

export const validateShopData = (shopData) => {
  if (!shopData?.name) {
    successMsg("Provide shop name");
    return false;
  }

  if (!shopData?.shopOwnerName) {
    successMsg("Provide shop owner name");
    return false;
  }

  if (!shopData?.email) {
    successMsg("Provide email");
    return false;
  }

  if (!shopData?.shopAddress?.address) {
    successMsg("Provide address");
    return false;
  }
  if (!shopData?.nid) {
    successMsg("Provide nid");
    return false;
  }

  if (!shopData?.passport) {
    successMsg("Provide nid");
    return false;
  }

  if (!shopData?.tradeLicense) {
    successMsg("Provide tradelicense");
    return false;
  }

  if (!shopData?.shopType) {
    successMsg("Provide shop type");
    return false;
  }

  if (!shopData?.status) {
    successMsg("Provide shop status");
    return false;
  }

  if (!shopData?.activeStatus) {
    successMsg("Provide active status");
    return false;
  }

  if (!shopData?.image?.length) {
    successMsg("Provide shop image");
    return false;
  }

  // if (!shopData?.banners?.length) {
  //   successMsg("Provide shop banner image");
  //   return false;
  // }

  return true;
};

export const generateShopData = async (data) => {
  let imageUrl = "";
  let bannerUrl = "";
  imageUrl = await getImageUrl(data?.image[0]);
  bannerUrl = await getImageUrl(data?.banners[0]);

  if (!imageUrl) {
    successMsg("image not upload");
    return { status: false };
  }

  // if (!bannerUrl) {
  //   successMsg("banner image not upload");
  //   return { status: false };
  // }
  // console.log("bannerUrl", bannerUrl);

  return {
    ...data,
    image: imageUrl,
    banners: bannerUrl,
    shopId: data?._id,
    shopTypeId: data?.shopType,
  };
};
