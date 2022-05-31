import React, { useState, useEffect, useCallback } from "react";

const baseUrl = "https://test-front.framework.team";
const createRequest = (path) => async (requestData) => {
  const response = await fetch(`${baseUrl}${path}`, requestData);
  const responseData = await response.json();

  return responseData;
};

// фетч автором посредством отдельной функции принимающей path запроса
const getAuthors = (requestData) => createRequest("/authors");

await getAuthors(data);

// Постараюсь сделать fetch в отдельный хук/функцию, чтобы вызывать в нужные моменты и было не так криво как сейчас
