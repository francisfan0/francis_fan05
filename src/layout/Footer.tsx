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
import resume from "../assets/Francis_Fan_Resume (3).pdf";
import { useEffect, useState } from "react";

// Import SVGs
import sunSvg from "../assets/sun-svgrepo-com.svg";
import moonSvg from "../assets/moon-svgrepo-com.svg";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check the saved theme in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  const handleDarkModeToggle = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
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
            href={resume}
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
            href="https://www.linkedin.com/in/francis-fan-51293a236/"
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
