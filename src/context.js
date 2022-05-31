import React, { useState, useContext, useCallback, useEffect } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const baseUrl = "https://test-front.framework.team";

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState("Author");
  const [currentLocation, setCurrentLocation] = useState("Location");
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputRangeFromValue, setInputRangeFromValue] = useState("");
  const [inputRangeBeforeValue, setInputRangeBeforeValue] = useState("");

  // Fetch
  const [authors, setAuthors] = useState([]);
  const getAuthors = useCallback(async () => {
    const response = await fetch(baseUrl + "/authors");
    const authors = await response.json();

    setAuthors(authors);
  }, [baseUrl]);

  useEffect(() => {
    getAuthors();
  }, [baseUrl, getAuthors]);

  const [locations, setLocations] = useState([]);
  const getLocations = useCallback(async () => {
    const response = await fetch(baseUrl + "/locations");
    const locations = await response.json();

    const correctLocations = locations.map((item) => ({
      ...item,
      name: item.location,
    }));

    setLocations(correctLocations);
  }, [baseUrl]);

  useEffect(() => {
    getLocations();
  }, [baseUrl, getLocations]);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        baseUrl,
        locations,
        authors,
        currentAuthor,
        setCurrentAuthor,
        currentLocation,
        setCurrentLocation,
        inputNameValue,
        setInputNameValue,
        inputRangeFromValue,
        setInputRangeFromValue,
        inputRangeBeforeValue,
        setInputRangeBeforeValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
