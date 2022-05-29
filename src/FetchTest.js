import React, { useEffect, useState, useCallback } from "react";

const baseUrl = "https://test-front.framework.team";
export default function FetchTest() {
  const [authors, setAuthors] = useState([]);

  const getAuthors = useCallback(async () => {
    const response = await fetch(baseUrl + "/locations");
    const authors = await response.json();
    setAuthors(authors);
    console.log(authors);
  }, [baseUrl]);

  useEffect(() => {
    getAuthors();
  }, [baseUrl, getAuthors]);
  return (
    <>
      <h3>{authors}</h3>
    </>
  );
}
