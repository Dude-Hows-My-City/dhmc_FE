import React, { useState } from "react";

const SearchBar = ({ filterNames }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    filterNames(e.target.value);
  };

  return (
    <input
      type="text"
      data-cy="search-bar"
      value={query}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchBar;
