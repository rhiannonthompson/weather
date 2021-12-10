import React from "react";
import SidebarLayout from "./SidebarLayout";
import MainHeader from "../components/main/MainHeader";
import MainSectionLayout from "./MainSectionLayout";

export default function PageLayout({ ...props }) {
  return (
    <>
      <div className="lg:flex flex-col lg:flex-row relative">
        <div className="bg-blue-900 min-h-screen lg:flex-none lg:w-104 xl:w-130">
          <SidebarLayout />
        </div>
        <div className="bg-blue-600 min-h-screen justify-center lg:flex-grow z-10">
          <div className="mx-6 md:mx-8 lg:mx-10 xl:mx-32">
            <MainHeader />
            <MainSectionLayout />
          </div>
        </div>
      </div>
    </>
  );
}
