import "./NavMenu.scss";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <nav className="navigation">
      <div className="navigation__menu">
        <NavLink to="/" className="navigation__link">
          <h4 className="navigation__item">Home</h4>
        </NavLink>
        <NavLink to="/booking" className="navigation__link">
          <h4 className="navigation__item">Booking</h4>
        </NavLink>
        <NavLink to="/booking" className="navigation__link">
          <h4 className="navigation__item">Local Attractions</h4>
        </NavLink>
      </div>
    </nav>
  );
}
