import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className="searchbar">
      <input
      type="search"
      placeholder="Search for a company"
      onChange={searchChange}
      />
    </div>
  );
}
export default SearchBox;
