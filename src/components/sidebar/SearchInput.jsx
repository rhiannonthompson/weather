import React, { useState } from "react";

export default function SearchInput({submitFormRequest}) {
  
  //todo add prop types
  
  const [location, setLocation] = useState("");
  
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!location || location === "") {
      return;
    }
    submitFormRequest(location);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="p-2 text-gray-800"
          name="location"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
    </div>
  );
}
