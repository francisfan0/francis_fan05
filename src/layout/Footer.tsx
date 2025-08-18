// import "./Layout.css";
// import "../index.css";

// const Footer = () => {
//   const handleDarkModeToggle = () => {
//     const body = document.body;
//     body.classList.toggle("dark-mode");

//     // Save the user preference
//     if (body.classList.contains("dark-mode")) {
//       localStorage.setItem("theme", "dark");
//     } else {
//       localStorage.setItem("theme", "light");
//     }
//   };

//   return (
//     <footer className="text-black py-4">
//       <div className="custom-container d-flex justify-content-between align-items-center">
//         <button
//           id="darkModeToggle"
//           className="btn btn-secondary"
//           onClick={handleDarkModeToggle}
//         >
//           Toggle Dark Mode
//         </button>
//         <div className="d-flex gap-3">
//           <a
//             href="https://github.com/francisfan0"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-hover-gray text-lg d-flex align-items-center text-decoration-none"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://www.linkedin.com/in/francis-fan-51293a236/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-hover-gray text-lg d-flex align-items-center text-decoration-none"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import "./Layout.css";
import "../index.css";
import { useEffect, useState } from "react";

// SVG paths
const sunSvg = "/sun-svgrepo-com.svg";
const moonSvg = "/moon-svgrepo-com.svg";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on client-side only
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user preference
    if (body.classList.contains("dark-mode")) {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "dark");
      }
      setIsDarkMode(true);
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "light");
      }
      setIsDarkMode(false);
    }
  };

  useEffect(() => {
    // Initialize the theme based on saved preference
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <footer className="text-black py-4">
      <div className="custom-container d-flex justify-content-between align-items-center">
        <button
          id="darkModeToggle"
          className="btn btn-default d-flex align-items-center"
          onClick={handleDarkModeToggle}
        >
          <img
            src={isDarkMode ? moonSvg : sunSvg}
            alt={isDarkMode ? "Moon Icon" : "Sun Icon"}
            className={`icon ${isDarkMode ? "moon" : "sun"}`}
          />
        </button>
        <div className="d-flex gap-3">
          <a
            href="/FrancisFan.pdf"
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
