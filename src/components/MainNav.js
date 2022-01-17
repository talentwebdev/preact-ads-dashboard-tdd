import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo4.png";
import Logo2 from "../assets/proimg.jpg";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/MainNav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MainNav() {
  const [showLinks, setShowLinks] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleNav = () => {
    setShowLinks(!showLinks);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });
  return (
    <div className="mainNav">
      <div className="logoSide">
        <div id="logoImg">
          <Link to="/">
            <img src={Logo} alt="BHHS" />
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link onClick={toggleNav} className="items" to="/">
            Home{" "}
          </Link>{" "}
          <Link onClick={toggleNav} className="items" to="/products">
            Products{" "}
          </Link>{" "}
          <Link onClick={toggleNav} className="items" to="/newsroom">
            Newsroom{" "}
          </Link>{" "}
          <Link onClick={toggleNav} className="items" to="/contact">
            Contact{" "}
          </Link>{" "}
          <Link onClick={toggleNav} className="items" to="/faq">
            FAQ{" "}
          </Link>{" "}
          <Link onClick={toggleNav} className="items" to="/tutorial">
            Tutorial{" "}
          </Link>{" "}
          <Link onClick={toggleNav} className="items" to="/partners">
            Partners{" "}
          </Link>{" "}
        </div>{" "}
        {showLinks ? (
          <FaTimes onClick={toggleNav} className="btn" />
        ) : (
          <FaBars className="btn" onClick={toggleNav} />
        )}{" "}
      </div>{" "}
      <div className="rightSide">
        <div id="proImg">
          <img src={Logo2} alt="BHHS" onClick={handleClick} />{" "}
        </div>{" "}
        <div id="proMenu">
          <ArrowDropDownIcon className="arrowBtn" onClick={handleClick} />{" "}
          <p onClick={handleClick}> John Smith </p>{" "}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem> Profile </MenuItem> <MenuItem> My account </MenuItem>{" "}
            <MenuItem> Logout </MenuItem>{" "}
          </Menu>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default MainNav;
