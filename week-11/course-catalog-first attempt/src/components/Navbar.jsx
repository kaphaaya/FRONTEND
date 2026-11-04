import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>TJ</span> Courses
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          All Courses
        </NavLink>

        <NavLink to="/category/Beginner">
          Beginner
        </NavLink>

        <NavLink to="/category/Intermediate">
          Intermediate
        </NavLink>
      </div>
    </nav>
  );
}