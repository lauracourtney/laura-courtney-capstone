import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          version="1.1"
          className="header__logo"
        >
          <g transform="translate(-48.000000, 0.000000)" fillRule="nonzero"></g>
          <path d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M12,4 C7.58172,4 4,7.58172 4,12 C4,16.4183 7.58172,20 12,20 C16.4183,20 20,16.4183 20,12 C20,7.58172 16.4183,4 12,4 Z M16.9498,7.05024 C17.3451231,7.44552923 17.3465876,8.03012976 17.2862468,8.56077817 L17.2492,8.84341 C17.0893,9.96276 16.6438,11.6176 16.0074,12.9986 C15.6973,13.6714 15.3066,14.3503 14.8285,14.8284 C14.3504,15.3065 13.6715,15.6972 12.9987,16.0073 C11.6177,16.6437 9.96283,17.0892 8.84348,17.2491 L8.56132853,17.2858644 C8.03077059,17.3454071 7.44254462,17.3419769 7.05031,16.9497 C6.69372538,16.5931615 6.65848988,16.0746112 6.69973321,15.5846727 L6.73169771,15.295668 C6.73790172,15.2485811 6.74438077,15.2021615 6.75089,15.1566 C6.9108,14.0372 7.3563,12.3823 7.99275,11.0014 C8.30284,10.3285 8.6935,9.64968 9.17163,9.17156 C9.64975,8.69343 10.3286,8.30277 11.0014,7.99268 C12.3824,7.35623 14.0373,6.91073 15.1566,6.75082 L15.4392512,6.71376968 C15.9699213,6.6534316 16.5544769,6.65494231 16.9498,7.05024 Z" />
        </svg>
        <h2 className="header__title">Voyagers Haven</h2>
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
