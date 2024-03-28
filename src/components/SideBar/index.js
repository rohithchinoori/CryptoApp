import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import "./index.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    setActiveItem(getActiveItem(location.pathname));
  }, [location]);

  const toggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log(isOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const getActiveItem = (pathname) => {
    if (pathname === "/") {
      return "Home";
    } else if (pathname === "/about") {
      return "About";
    } else if (pathname === "/contact") {
      return "Contact";
    }
    return "Home";
  };

  return (
    <div className="bg">
      <div className="logo-cont">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.aQ0RQdCKREKKeF5SYi9hfgEsEs&pid=Api&P=0&h=180"
          alt="logo"
          className="logo"
        />
        <p className="logo-text">Cryp_Blok</p>
      </div>
      <div className="search-cont">
        <FaSearch />
        <input type="search" placeholder="search" className="search" />
      </div>
      <div className="navigation">
        <div className="toggle-btn" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="dropdown-menu">
          <ul className="mobile-li">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <ul className="mobile-menu">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => handleItemClick("Home")}
            >
              <IoHomeOutline className="li-icon" />
            </li>
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
            exact
          >
            <li
              className={activeItem === "About" ? "active" : ""}
              onClick={() => handleItemClick("About")}
            >
              <FiInfo className="li-icon" />
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="active"
            exact
          >
            <li
              className={activeItem === "Contact" ? "active" : ""}
              onClick={() => handleItemClick("Contact")}
            >
              <IoCallOutline className="li-icon" />
            </li>
          </NavLink>
        </ul>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => handleItemClick("Home")}
            >
              <IoHomeOutline className="li-icon" />
              Home
            </li>
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            <li
              className={activeItem === "About" ? "active" : ""}
              onClick={() => handleItemClick("About")}
            >
              <FiInfo className="li-icon" />
              About
            </li>
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <li
              className={activeItem === "Contact" ? "active" : ""}
              onClick={() => handleItemClick("Contact")}
            >
              <IoCallOutline className="li-icon" />
              Contact
            </li>
          </NavLink>
        </ul>
        <div className="down">
          <ul>
            <li>
              <IoMdNotificationsOutline className="li-icon" />
              Notification
            </li>
            <li>
              <IoMdSettings className="li-icon" />
              Settings
            </li>
            <li>
              <MdOutlineContactSupport className="li-icon" />
              Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
