import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-black py-4">
      <div className="custom-container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white fw-bold fs-3 text-decoration-none">
          Francis Fan
        </Link>
        <div className="d-flex gap-3">
          <a
            href="https://github.com/francisfan0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg d-flex align-items-center text-decoration-none"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/francis-fan-51293a236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg d-flex align-items-center text-decoration-none"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
