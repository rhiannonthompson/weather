import React from "react";
import SearchInput from "./SearchInput";

export default function SidebarHeader() {
  return (
    <div className="flex pt-8 px-6 md:px-8 justify-between">
      <SearchInput/>
    </div>
  );
}
