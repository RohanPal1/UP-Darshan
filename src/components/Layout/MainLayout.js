import React from "react";
import Header from "../Header/Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="main-content">{children}</div>
    </>
  );
}

export default MainLayout;
