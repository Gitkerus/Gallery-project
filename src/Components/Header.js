import React from "react";
import { useGlobalContext } from "../context";

import logo from "../Assets/logo.svg";
import switcherLightTheme from "../Assets/switcherLightTheme.svg";
import switcherDarkTheme from "../Assets/switcherDarkTheme.svg";

function Header() {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();

  return (
    <header className="header">
      <img src={logo} alt="FWT logo" className="logo" />
      <img
        src={`${isDarkTheme ? switcherDarkTheme : switcherLightTheme}`}
        alt="lamp switcher"
        className="switcher"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      />
    </header>
  );
}

export default Header;
