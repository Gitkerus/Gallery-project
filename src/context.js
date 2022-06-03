import React, { useState, useContext, useCallback, useEffect } from "react";
import { loadAuthors, loadLocations } from "./Api/apiRequests";
import { baseUrl } from "./Constants/constants";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState("Author");
  const [currentLocation, setCurrentLocation] = useState("Location");
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputRangeFromValue, setInputRangeFromValue] = useState("");
  const [inputRangeBeforeValue, setInputRangeBeforeValue] = useState("");

  // Fetch
  const [authors, setAuthors] = useState([]);
  const getAuthors = useCallback(async () => {
    const data = await loadAuthors();
    setAuthors(data);
  }, []);

  useEffect(() => {
    getAuthors();
  }, [getAuthors]);

  const [locations, setLocations] = useState([]);
  const getLocations = useCallback(async () => {
    const data = await loadLocations();

    const correctLocations = data.map((item) => ({
      ...item,
      name: item.location,
    }));

    setLocations(correctLocations);
  }, []);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

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
