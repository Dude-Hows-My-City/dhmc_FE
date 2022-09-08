import React, { useState } from "react";
import { StyledSearchBar } from "../styles/SearchBar.styled";

const SearchBar = ({ filterNames }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    filterNames(e.target.value);
  };

  return (
    <StyledSearchBar>
      <input
        type="text"
        data-cy="search-bar"
        value={query}
        placeholder="Search City Name"
        onChange={(e) => handleChange(e)}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
