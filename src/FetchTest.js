import React, { useEffect, useState, useCallback } from "react";

import { loadPaintings } from "./Api/apiRequests";

function FetchTest() {
  const [paintings, setPaintings] = useState([]);
  const requestData = ;
  const getPaintings = useCallback(async (requestData) => {
    const data = await loadPaintings();
    setPaintings(data);
  }, []);

  useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  return <>{console.log(paintings)}</>;
}

export default FetchTest;
