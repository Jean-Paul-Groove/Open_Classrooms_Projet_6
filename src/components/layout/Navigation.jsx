import { NavLink } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            className="navigation__list__link"
            to="/"
            style={({ isActive }) => {
              return isActive ? { textDecoration: 'underline' } : {};
            }}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation__list__link"
            style={({ isActive }) => {
              return isActive ? { textDecoration: 'underline' } : {};
            }}
            to="/about"
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
