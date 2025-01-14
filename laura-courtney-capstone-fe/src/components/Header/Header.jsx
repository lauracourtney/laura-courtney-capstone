import { NavLink } from "react-router-dom";
import "./Header.scss";
import HorizontalLogo from "../../assets/images/horizontal-logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img
          src={HorizontalLogo}
          alt="Vayogers Haven Logo"
          className="header__logo"
        />
      </div>

      <nav className="header__navigation">
        <NavLink to="/" className="header__link">
          <h3 className="header__item">Home</h3>
        </NavLink>
        <NavLink to="/booking" className="header__link">
          <h3 className="header__item">Booking</h3>
        </NavLink>
        <NavLink to="/booking" className="header__link">
          <h3 className="header__item">Local Attractions</h3>
        </NavLink>
      </nav>
    </header>
  );
}
