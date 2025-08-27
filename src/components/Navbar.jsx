import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img
            src="https://t4.ftcdn.net/jpg/05/13/72/29/360_F_513722905_SgxiGdjQZsdvP4ODmERsQGgW2bUwj1lT.jpg"
            alt="logo"
          />
        </div>
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setShow((prev) => !prev)}
        />
      </div>

      <ul className={`links ${show ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setShow(false)}>
            <AiOutlineHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" onClick={() => setShow(false)}>
            <MdWorkOutline className="icon" /> Jobs
          </Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/dashboard" onClick={() => setShow(false)}>
              <FaUserCircle className="icon" /> Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={() => setShow(false)}>
              <AiOutlineLogin className="icon" /> Login
            </Link>
          </li>
        )}
      </ul>

      <button className="theme-toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
