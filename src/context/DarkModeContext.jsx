import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

const updateDarkMode = (darkmode) => {
  if (darkmode) {
    document.documentElement.classList.add("darkmode");
  } else {
    document.documentElement.classList.remove("darkmode");
  }
};

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={(darkMode, toggleDarkMode)}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
