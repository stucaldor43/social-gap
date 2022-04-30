import * as React from "react";

const PlusSvg = ({ classes, ...props }) => (
  <svg className={`svg-icon ${classes || ""}`} viewBox="0 0 20 20" {...props}>
    <path
      fill="none"
      d="M13.68 9.448h-3.128V6.319a.552.552 0 0 0-1.104 0v3.129H6.319a.551.551 0 0 0 0 1.102h3.129v3.129a.552.552 0 0 0 1.104 0V10.55h3.128a.552.552 0 1 0 0-1.102zM10 .968a9.031 9.031 0 1 0 0 18.063A9.031 9.031 0 0 0 10 .968zm0 16.934a7.903 7.903 0 1 1 .002-15.806A7.903 7.903 0 0 1 10 17.902z"
    />
  </svg>
);

export default PlusSvg;
