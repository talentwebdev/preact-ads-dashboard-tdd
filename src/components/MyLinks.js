import React from "react";
import { Link } from "react-router-dom";
function MyLinks() {
  return (
    <div className="myLinks">
      <div id="title">
        <p>My Links</p>
      </div>
      <div id="body">
        <Link to="/">BHHS Tours</Link>
        <Link to="/">Training Videos</Link>
        <Link to="/">Marketing Materials</Link>
      </div>
    </div>
  );
}

export default MyLinks;
