import React from 'react';
import '../styles/searchbar.css';

const SearchBox = ({searchChange}) => {
  return (
    <div>
      <input
      className="searchbar kaushan"
      type="search"
      placeholder="Search here"
      onChange={searchChange}
      />
    </div>
  );
}
export default SearchBox;
