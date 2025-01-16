import "./NavMenu.scss";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <nav className="navigation">
      <div className="navigation__menu">
        <NavLink to="/" className="navigation__link">
          <h3 className="navigation__item">Home</h3>
        </NavLink>
        <NavLink to="/booking" className="navigation__link">
          <h3 className="navigation__item">Booking</h3>
        </NavLink>
        <NavLink to="/booking" className="navigation__link">
          <h3 className="navigation__item">Local Attractions</h3>
        </NavLink>
      </div>
    </nav>
  );
}
