import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        VogueCart
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
    </header>
  );
}

export default Navbar;
