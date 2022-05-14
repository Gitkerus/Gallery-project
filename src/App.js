import React from "react";
import { Range, Select, Pagination, Input } from "fwt-internship-uikit";
import "./App.css";
import Header from "./Header";
import SearchBars from "./SearchBars";
import Content from "./Content";

function App() {
  return (
    <>
      <Header />
      <SearchBars />
      <Content />
      <Pagination />
    </>
  );
}

export default App;
