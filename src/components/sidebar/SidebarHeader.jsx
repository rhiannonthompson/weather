import React from "react";
import LocationIcon from "./LocationIcon";
import SearchInput from "./SearchInput";

export default function SidebarHeader() {
  return (
    <div className="flex pt-8 px-4 justify-between">
      <SearchInput />
      <LocationIcon/>
    </div>
  );
}
