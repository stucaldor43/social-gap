import * as React from "react";

const ProfileSvg = ({ classes, ...props }) => (
  <svg className={`svg-icon ${classes || ""}`} viewBox="0 0 20 20" {...props}>
    <path
      fill="none"
      d="M10 10.9a4.31 4.31 0 0 0 4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696 4.223 5.696 6.594A4.31 4.31 0 0 0 10 10.9zm0-7.569a3.268 3.268 0 0 1 3.266 3.263A3.27 3.27 0 0 1 10 9.861a3.27 3.27 0 0 1-3.265-3.267c0-1.8 1.465-3.263 3.265-3.263zM10 12.503c-4.418 0-7.878 2.058-7.878 4.685a.518.518 0 1 0 1.039 0c0-1.976 3.132-3.646 6.84-3.646 3.707 0 6.838 1.671 6.838 3.646a.52.52 0 0 0 1.041 0c-.001-2.627-3.462-4.685-7.88-4.685z"
    />
  </svg>
);

export default ProfileSvg;
