import React from "react";
import { Range, Select, Pagination, Input } from "fwt-internship-uikit";
import logo from "./logo.svg";
import theme_switcher from "./switcher.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo" height={"64px"} width={"64px"} />
      <img src={theme_switcher} alt="" className="switcher" />
    </header>
  );
}

export default Header;
