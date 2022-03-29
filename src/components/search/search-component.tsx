import React from "react";
import "./search-component.scss";

const SearchComponent = (props: any) => {
  return (
    <>
      {props.searchType === "navbar" && (
        <label className="navbar">
          <input
            type="text"
            className="searchBar"
            placeholder="Search for restaurant cuisine, chef"
          />
        </label>
      )}

      {props.searchType === "hero" && (
        <label className="hero">
          <input
            type="text"
            className="searchBar"
            placeholder="Search for restaurant cuisine, chef"
          />
        </label>
      )}
    </>
  );
};

export default SearchComponent;
