import React from "react";
import { Range, Select, Pagination, Input } from "fwt-internship-uikit";
import "./App.css";
import Header from "./Header";
import SearchBars from "./SearchBars";
import Content from "./Content";
import PaginationTest from "./Pagination";

function App() {
  return (
    <>
      <Header />
      <SearchBars />
      <Content />
      <PaginationTest />
    </>
  );
}

export default App;
