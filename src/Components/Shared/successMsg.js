import { toast } from "react-toastify";

export const successMsg = (msg, status) => {
  if (status === "success") {
    return toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyStyle: {
        zIndex: "99999",
      },
    });
  }
  return toast.warn(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
