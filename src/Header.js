import React from "react";
import logo from "./img/logo.svg";
import switcherLightTheme from "./img/switcherLightTheme.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <img src={switcherLightTheme} alt="" className="switcher" />
    </header>
  );
}

export default Header;
