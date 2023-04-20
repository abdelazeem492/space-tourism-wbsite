import { NavLink } from "react-router-dom";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo" style={{ marginRight: "64px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <nav style={isOpen ? { right: 0 } : {}}>
        <span className="line"></span>
        <div className="nav-links">
          <NavLink
            to="/"
            className={`nav-text nav-link `}
            data-num="00"
            onClick={() => setIsOpen(false)}
          >
            home
          </NavLink>
          <NavLink
            to="/destination"
            className={`nav-text nav-link `}
            data-num="01"
            onClick={() => setIsOpen(false)}
          >
            destination
          </NavLink>
          <NavLink
            to="/crew"
            className={`nav-text nav-link `}
            data-num="02"
            onClick={() => setIsOpen(false)}
          >
            crew
          </NavLink>
          <NavLink
            to="/technology"
            className={`nav-text nav-link `}
            data-num="03"
            onClick={() => setIsOpen(false)}
          >
            technology
          </NavLink>
        </div>
      </nav>
      <span onClick={toggleMenu}>
        {isOpen ? (
          <img src={CloseIcon} alt="" className="icon" />
        ) : (
          <img src={HamburgerIcon} alt="" className="icon" />
        )}
      </span>
    </header>
  );
};

export default NavBar;
