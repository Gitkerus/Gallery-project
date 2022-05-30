import React from "react";
import "fwt-internship-uikit/dist/index.css";
import "./App.css";
import Header from "./Header";
import SearchBars from "./SearchBars";
import ContentList from "./Components/ContentList";
import PaginationBox from "./PaginationBox";

function App() {
  return (
    <>
      {/* <FetchTest /> */}
      <Header />
      <SearchBars />
      <ContentList />
      <PaginationBox />
      {/* <PaginationTest /> */}
    </>
  );
}

export default App;
