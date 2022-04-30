import React from "react";
import Header from "./Header";

function AuthUserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default AuthUserLayout;
