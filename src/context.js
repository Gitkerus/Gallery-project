import React, { useState, useContext, useCallback, useEffect } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const baseUrl = "https://test-front.framework.team";
  const [currentAuthor, setCurrentAuthor] = useState("Author");
  const [currentLocation, setCurrentLocation] = useState("Location");

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

    const correctLocations = locations.map((item) => {
      const { location, ...otherProps } = item;

      const correctProps = {
        name: location,
        ...otherProps,
      };

      return correctProps;
    });

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
