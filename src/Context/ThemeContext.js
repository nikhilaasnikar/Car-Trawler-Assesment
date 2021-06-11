import React, { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setdarkTheme] = useState(true);

  function toggleTheme() {
    setdarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
