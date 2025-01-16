import { useState } from "react";
import "./Header.scss";
import HorizontalLogo from "../../assets/images/horizontal-logo.png";
import NavMenu from "../NavMenu/NavMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <img
            src={HorizontalLogo}
            alt="Vayogers Haven Logo"
            className="header__logo"
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 24.75 24.75"
          xmlSpace="preserve"
          className="header__icon"
          onClick={openMenuBar}
        >
          <g>
            <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2   c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2   c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z" />
          </g>
        </svg>
      </div>
      <div className="header__bottom">
        {openMenu && (
          <>
            <NavMenu />
          </>
        )}
      </div>
    </header>
  );
}
