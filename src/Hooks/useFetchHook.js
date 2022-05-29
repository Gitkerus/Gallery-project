import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (test) => {
  const baseUrl = "https://test-front.framework.team";
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(baseUrl + `/${test}`);
    const data = await response.json();
    setData(data);
  }, [test]);

  useEffect(() => {
    getData();
  }, [test, getData]);
  return { data };
};

// Думал написать универсальный хук для фетча принимающий параметр что именно фетчить, делать под него useState с названием этого самого параметра и таким же параметром запроса, т.к. они совпадают для authors и locations, но как то не получилосб реализорвать, да и в принципе тут всего 3-4 фетча, так что можно обойтись, может смогу довести до ума попозже
