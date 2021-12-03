import React from "react";
import MainSectionLayout from "./MainSectionLayout";
import SidebarLayout from "./SidebarLayout";

export default function PageLayout({ ...props }) {
  return (
    <div className="flex">
      <SidebarLayout/>
      <div className="bg-blue-500 w-full z-20">    
       <MainSectionLayout/>
      </div>
    </div>
  );
}
