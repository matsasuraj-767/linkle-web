import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
  <div className="logo">
    <Link to="/">Linkle</Link>
  </div>

  <div className="nav-links">
    <Link to="/feed" className="nav-link">Feed</Link>
<Link to="/profile" className="nav-link">Profile</Link>
<Link to="/login" className="nav-link">Login</Link>
<Link to="/signup" className="nav-link">Signup</Link>
  </div>
</nav>
  );
}

export default Navbar;
