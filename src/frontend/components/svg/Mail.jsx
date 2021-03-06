import * as React from "react";

const MailSvg = ({ classes, ...props }) => (
  <svg className={`svg-icon ${classes || ""}`} viewBox="0 0 20 20" {...props}>
    <path
      fill="none"
      d="M16.999 4.975a2.315 2.315 0 0 0-1.604-.654H4.606c-.584 0-1.104.236-1.514.593-.016.014-.042.011-.055.029-.003.002-.002.007-.005.01a2.31 2.31 0 0 0-.756 1.696v6.702a2.331 2.331 0 0 0 2.33 2.329h10.79a2.33 2.33 0 0 0 2.328-2.329V6.649c0-.66-.283-1.25-.725-1.674zm-1.603.381c.098 0 .183.035.273.055l-5.668 4.735-5.619-4.745c.075-.014.145-.045.224-.045h10.79zm1.292 7.995c0 .712-.581 1.294-1.293 1.294H4.606a1.296 1.296 0 0 1-1.294-1.294V6.649c0-.235.081-.445.192-.636l6.162 5.205a.518.518 0 0 0 .667.002l6.189-5.171c.099.181.168.38.168.6v6.702z"
    />
  </svg>
);

export default MailSvg;
