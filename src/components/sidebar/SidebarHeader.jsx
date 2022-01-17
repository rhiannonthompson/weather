import React from "react";
import LocationIcon from "./LocationIcon";
import SearchInput from "./SearchInput";

export default function SidebarHeader({submitFormRequest}) {
  return (
    <div className="flex pt-8 px-6 md:px-8 justify-between">
      <SearchInput
        submitFormRequest={submitFormRequest}
      />
      <LocationIcon/>
    </div>
  );
}
