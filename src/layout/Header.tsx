import { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // Ensure you include the CSS file for styles
import menu from "../assets/menu-icon.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="py-3">
      <div className="custom-container d-flex justify-content-between align-items-center position-relative">
        <Link to="/" className="text-hover-grayl fs-3 text-decoration-none">
          Francis
        </Link>
        <div className="d-flex align-right">
          <button
            className="btn btn-default d-lg-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="navbarNav"
          >
            <img
              src={menu}
              alt="Menu"
              style={{
                height: "19px", // Set height
                display: "block",
                margin: "0 auto",
              }}
            />
          </button>
          <div
            className={`backdrop ${isOpen ? "show" : ""}`}
            onClick={closeMenu} // Close the menu when clicking outside
          ></div>
          <div
            className={`navbar-collapse ${
              isOpen ? "show" : ""
            } d-lg-flex flex-column flex-lg-row text-align text-end`}
            id="navbarNav"
          >
            <Link
              to="/courses"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Courses
            </Link>
            <Link
              to="/experience"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Projects
            </Link>
            <Link
              to="/photography"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Photography
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
