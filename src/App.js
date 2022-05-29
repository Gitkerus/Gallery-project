import React from "react";
import "fwt-internship-uikit/dist/index.css";
import "./App.css";
import Header from "./Header";
import SearchBars from "./SearchBars";
import ContentList from "./Components/ContentList";
import PaginationTest from "./Pagination";
import FetchTest from "./FetchTest";

function App() {
  return (
    <>
      {/* <FetchTest /> */}
      <Header />
      <SearchBars />
      <ContentList />
      {/* <PaginationTest /> */}
    </>
  );
}

export default App;
