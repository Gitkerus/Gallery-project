import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const baseUrl = "https://test-front.framework.team";

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        baseUrl,
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
