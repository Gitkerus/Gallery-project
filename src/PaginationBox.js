import React from "react";
import { Pagination } from "fwt-internship-uikit";
import { useGlobalContext } from "./context";

function PaginationBox() {
  const { isDarkTheme } = useGlobalContext();
  return <Pagination className="pagination__box" isDarkTheme={isDarkTheme} />;
}
export default PaginationBox;
