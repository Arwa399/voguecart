import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { links } from "./NavbarData";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
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
        <NavLink to="/search" className="navbar__icon">
          <FiSearch />
        </NavLink>

        <NavLink to="/account" className="navbar__icon">
          <FiUser />
        </NavLink>

        <NavLink to="/cart" className="navbar__icon">
          <FiShoppingBag />
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
