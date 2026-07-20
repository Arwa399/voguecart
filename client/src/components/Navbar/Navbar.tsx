import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { links, actions } from "./NavbarData";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        <span className="logo">VOGUECART</span>
      </NavLink>

      <nav className="navbar__links" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <nav className="navbar__actions" aria-label="User navigation">
        <button className="search-btn" aria-label="Search">
          <FiSearch />
        </button>

        {actions.map((action) => (
          <NavLink key={action.to} to={action.to} className="navbar__link">
            {action.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
