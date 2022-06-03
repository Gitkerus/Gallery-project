import React from "react";
import { Pagination } from "fwt-internship-uikit";
import { useGlobalContext } from "../context";

function PaginationBox() {
  const { isDarkTheme, pagesAmount, page, setPage } = useGlobalContext();

  const handleOnChange = (value) => {
    setPage(value);
  };

  return (
    <Pagination
      className="pagination__box"
      isDarkTheme={isDarkTheme}
      pagesAmount={pagesAmount}
      currentPage={page}
      onChange={handleOnChange}
    />
  );
}
export default PaginationBox;
