/* eslint-disable max-len */
import { Upload } from "@mui/icons-material";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const focusedStyle = {};

const acceptStyle = {};

const rejectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%23DD5B63FF' stroke-width='3' stroke-dasharray='11%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
};

const defaultStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px",
  background: "rgb(250, 250, 250)",
  outline: "none",
  transition: "border 250ms ease-in-out 0s",
  minHeight: "110px",
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%2331B44C' stroke-width='3' stroke-dasharray='11%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
  borderRadius: "25px",
  cursor: "pointer",
};

const readonlyStyle = {
  pointerEvents: "none",
};

export default function StyledFileDropzone({ text, readOnly, ...args }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      maxSize: 1000 * 1000,
      multiple: false,
      accept: {
        "image/png": [".png", ".jpg", ".jpeg"],
      },
      ...args,
    });

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(readOnly ? readonlyStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, readOnly]
  );

  return (
    <div {...getRootProps({ style: { ...defaultStyle, ...style } })}>
      <input {...getInputProps()} />
      <p
        style={{
          color: "#8c8c8c",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0px",
          gap: "5px",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Upload /> Drop files here or click to upload
        </span>
      </p>
    </div>
  );
}
