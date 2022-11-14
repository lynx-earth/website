import React from "react";
import PageContainer from "container/page";
import PopupSearch from "components/popup/PopupSearch";
import MobileNav from "../components/MobileNav";

const LayoutDefault = ({ children, className }) => {
  return (
    <div className={className}>
      {/* <PopupSearch /> */}
      <MobileNav />
      {children}
    </div>
  );
};

export default LayoutDefault;
