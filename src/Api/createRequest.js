import { baseUrl } from "../Constants/constants";

export const createRequest = (path) => async (urlParams = null) => {
  const url = urlParams
    ? `${baseUrl}${path}?` + new URLSearchParams(urlParams)
    : `${baseUrl}${path}`;
  const response = await fetch(url);
  const responseData = await response.json();

  return responseData;
};
