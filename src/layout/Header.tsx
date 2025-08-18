import { useState } from "react";
import Link from "next/link";
import "./Layout.css"; // Ensure you include the CSS file for styles
const menu = "/menu-icon.svg";
import "../index.css";

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
        <Link href="/" className="text-hover-grayl fs-3 text-decoration-none">
          Francis
        </Link>
        <div className="d-flex align-right">
          <button
            className="btn btn-default d-lg-none dark-btn"
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
              href="/courses"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Courses
            </Link>
            <Link
              href="/experience"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Projects
            </Link>
            <Link
              href="/photography"
              onClick={closeMenu}
              className="text-hover-grayl fs-3 text-decoration-none"
            >
              Photography
            </Link>
            {process.env.NEXT_PUBLIC_ENABLE_RESUME_SEARCH !== "false" && (
              <Link
                href="/resume-search"
                onClick={closeMenu}
                className="text-hover-grayl fs-3 text-decoration-none"
                style={{
                  opacity: 0.1,
                  fontSize: "0.6rem",
                  cursor: "default",
                  userSelect: "none",
                }}
                title=""
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.3")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.1")}
              >
                ·
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
