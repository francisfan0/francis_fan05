import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3">
      <div className="custom-container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-black fs-3 text-decoration-none">
          Francis
        </Link>
        <div className="d-flex align-items-center">
        <Link to="/courses" className="text-black fs-3 text-decoration-none">
          Courses
        </Link>
        <Link to="/experience" className="text-black fs-3 text-decoration-none">
          Experience
        </Link>
        <Link to="/projects" className="text-black fs-3 text-decoration-none">
          Projects
        </Link>
        <Link to="/photography" className="text-black fs-3 text-decoration-none">
          Photography
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
