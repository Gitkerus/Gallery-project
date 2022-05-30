import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import logo from "./img/logo.svg";
import switcherLightTheme from "./img/switcherLightTheme.svg";
import switcherDarkTheme from "./img/switcherDarkTheme.svg";

function Header() {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();

  useEffect(() => {
    isDarkTheme
      ? (document.body.style.backgroundColor = "#000000")
      : (document.body.style.backgroundColor = "#ffffff");
  }, [isDarkTheme]);

  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <img
        src={`${isDarkTheme ? switcherDarkTheme : switcherLightTheme}`}
        alt=""
        className="switcher"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      />
    </header>
  );
}

export default Header;
