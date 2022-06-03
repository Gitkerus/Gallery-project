import React from "react";
import "fwt-internship-uikit/dist/index.css";

import Header from "./Components/Header";
import SearchBars from "./Components/SearchBars";
import ContentList from "./Components/ContentList";
import PaginationBox from "./Components/PaginationBox";
import { useGlobalContext } from "./context";
import "./App.css";

function App() {
  const { isDarkTheme } = useGlobalContext();
  return (
    <>
      <div
        className={`${isDarkTheme ? "darkTheme appBox" : "lightTheme appBox"}`}
      >
        <Header />
        <SearchBars />
        <ContentList />
        <PaginationBox />
      </div>
    </>
  );
}

export default App;
