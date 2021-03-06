import React from "react";
import AdminDashboard from "../sidepages/AdminDashboard";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="sideBar">
        <div className="sideBarTitle">
          <p>BHHS Broker Tools</p>
        </div>
        <div className="sideBarMenu">
          <Link to="/">Home</Link>
          <Link to="/">Admin Dashboard</Link>
          <Link to="/">BOOST Statistics</Link>
          <Link to="/">InstaView Statistics</Link>
          <Link to="/">Agent Profile</Link>
          <Link to="/">Agent Search</Link>
          <Link to="/">Listing Search</Link>
          <Link to="/">All Tours</Link>
          <Link to="/">Training</Link>
          <Link to="/">Marketing Materials</Link>
          <Link to="/">Help/Contact Us</Link>
        </div>
      </div>
      <div className="mainBody">
        <AdminDashboard />
      </div>
    </div>
  );
}

export default Home;
