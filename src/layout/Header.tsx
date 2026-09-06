"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Layout.css";
import "../index.css";

const menu = "/menu-icon.svg";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="custom-container d-flex justify-content-between align-items-center position-relative">
        <Link href="/" className="site-brand text-decoration-none" onClick={closeMenu}>
          Francis
        </Link>
        <div className="d-flex align-right">
          <button
            className="btn btn-default d-lg-none dark-btn"
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="navbarNav"
          >
            <img
              src={menu}
              alt="Menu"
              style={{ height: "19px", display: "block", margin: "0 auto" }}
            />
          </button>
          <div
            className={`backdrop ${isOpen ? "show" : ""}`}
            onClick={closeMenu}
          />
          <nav
            className={`navbar-collapse ${isOpen ? "show" : ""} d-lg-flex flex-column flex-lg-row text-align text-end`}
            id="navbarNav"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`nav-link-item text-decoration-none${pathname === href ? " nav-active" : ""}`}
              >
                {label}
              </Link>
            ))}
            {process.env.NEXT_PUBLIC_ENABLE_RESUME_SEARCH !== "false" && (
              <Link
                href="/resume-search"
                onClick={closeMenu}
                className="text-decoration-none"
                style={{ opacity: 0.1, fontSize: "0.6rem", cursor: "default", userSelect: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.3")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.1")}
              >
                ·
              </Link>
            )}
            <Link
              href="/initials-game"
              onClick={closeMenu}
              className="text-decoration-none"
              style={{ opacity: 0.1, fontSize: "0.6rem", cursor: "default", userSelect: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.3")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.1")}
            >
              ·
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
