import * as React from "react";

const UploadSvg = ({ classes, ...props }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={`svg-icon ${classes || ""}`}
    style={{
      width: 24,
      height: 24,
    }}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8-4-4m0 0L8 8m4-4v12"
    />
  </svg>
);

export default UploadSvg;
