import React from "react";
import SearchIcon from "@material-ui/icons/Search";
function SearchItem({ title, name }) {
  return (
    <div className="searchItem">
      <div id="itemTitle">
        <p>{title}</p>
      </div>
      <div id="itemBody">
        <SearchIcon />
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default SearchItem;
