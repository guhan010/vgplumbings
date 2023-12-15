import "./Navbar.css";
import Button from "./navbar/Button.tsx";
import PlumbDrop from "./navbar/PlumbDrop.tsx";
import ElectricDrop from "./navbar/ElectricDrop.tsx";
import { Link } from "react-router-dom";

import { useState } from "react";
import vglogo from "../assets/vglogo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [edropdown, setEdropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const onPlumbingEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onPlumbingLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onElectricalEnter = () => {
    if (window.innerWidth < 960) {
      setEdropdown(false);
    } else {
      setEdropdown(true);
    }
  };

  const onElectricalLeave = () => {
    if (window.innerWidth < 960) {
      setEdropdown(false);
    } else {
      setEdropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="logo" src={vglogo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onPlumbingEnter}
            onMouseLeave={onPlumbingLeave}
          >
            <Link
              to="/plumbing"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PLUMBING
            </Link>
            {dropdown && <PlumbDrop />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onElectricalEnter}
            onMouseLeave={onElectricalLeave}
          >
            <Link
              to="/electrical"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ELECTRICAL
            </Link>
            {edropdown && <ElectricDrop />}
          </li>
          <li className="nav-item">
            <Link
              to="/aircondition"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              AIR-CONDITIONING
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resources"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              RESOURCES
            </Link>
          </li>
          <li className="nav-item">
            <Button />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
