import { Link } from "react-router-dom";
import "../../assets/CSS/UserNavbar.css";
export const UserNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">AskToPedia</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Signup
        </Link>
      </div>
    </nav>
  );
};

