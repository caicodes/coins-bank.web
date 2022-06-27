import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <Link
          className="logo-btn"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={closeMenu}
        >
          <h1>
            Coins<span className="primary">Bank</span>
          </h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="featured"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleClick}
            >
              Featured
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="earn"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleClick}
            >
              Earn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          <Link
            to="connect"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="btn"
            onClick={closeMenu}
          >
            Connect Wallet
          </Link>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
