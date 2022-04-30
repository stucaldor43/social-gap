import * as React from "react";

const SearchSvg = ({ classes, ...props }) => (
  <svg className={`svg-icon ${classes || ""}`} viewBox="0 0 20 20" {...props}>
    <path
      fill="none"
      d="M12.323 2.398a5.954 5.954 0 0 0-2.319-.472 5.934 5.934 0 0 0-5.476 3.625 5.91 5.91 0 0 0-.038 4.551c.528 1.304 1.494 2.333 2.72 2.99L5.467 17.33a.54.54 0 0 0 .996.41l1.74-4.23c.583.186 1.18.309 1.795.309a5.938 5.938 0 0 0 5.478-3.629 5.95 5.95 0 0 0-3.153-7.792zm2.165 7.372a4.873 4.873 0 0 1-6.387 2.588l-.002-.004h-.003a4.833 4.833 0 0 1-2.607-2.656 4.836 4.836 0 0 1 .03-3.727 4.86 4.86 0 0 1 4.487-2.969c.651 0 1.292.129 1.898.386a4.88 4.88 0 0 1 2.584 6.382z"
    />
  </svg>
);

export default SearchSvg;