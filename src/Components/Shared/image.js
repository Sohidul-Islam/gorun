// upload image or existing return url
import axios from "axios";
import { successMsg } from "./successMsg";
import * as API_URL from "@/src/network/api";

export const uploadImage = async (image) => {
  const fdata = new FormData();
  fdata.append("key", API_URL.imageUploadApiKey);
  fdata.append("image", image);

  try {
    const { data } = await axios.post(API_URL.IMAGE_UPLOAD, fdata);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: error?.message,
    };
  }
};

export const getImageUrl = async (image) => {
  if (!image?.name) {
    return image?.preview;
  }

  const data = await uploadImage(image);

  console.log("data", data?.data?.url);

  if (data?.data?.url) {
    return data?.data?.url;
  }

  successMsg(data.message, "error");
  console.log(data.message);

  return null;
};
