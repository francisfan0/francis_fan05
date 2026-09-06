"use client";

import "./Layout.css";
import "../index.css";
import { useEffect, useState } from "react";
import { applyTheme, isDarkTheme } from "../lib/theme";

const sunSvg = "/sun-svgrepo-com.svg";
const moonSvg = "/moon-svgrepo-com.svg";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(isDarkTheme());
  }, []);

  const handleDarkModeToggle = () => {
    const next = !isDarkMode;
    applyTheme(next);
    setIsDarkMode(next);
  };

  return (
    <footer className="text-black py-4">
      <div className="custom-container d-flex justify-content-between align-items-center">
        <button
          id="darkModeToggle"
          className="btn btn-default d-flex align-items-center"
          onClick={handleDarkModeToggle}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <img
            src={isDarkMode ? moonSvg : sunSvg}
            alt={isDarkMode ? "Moon Icon" : "Sun Icon"}
            className={`icon ${isDarkMode ? "moon" : "sun"}`}
          />
        </button>
        <div className="d-flex gap-3">
          <a
            href="/FrancisFanNG27.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-gray text-lg d-flex align-items-center text-decoration-none"
          >
            Resume
          </a>
          <a
            href="https://github.com/francisfan0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-gray text-lg d-flex align-items-center text-decoration-none"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/francis-fan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-gray text-lg d-flex align-items-center text-decoration-none"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
