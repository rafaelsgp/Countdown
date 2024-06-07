import { createContext, useState } from "react";

import NewYear from "../assets/newyear.jpg";

export const ThemeContext = createContext();

const titleTemplate = "Contagem regressiva para 2025";
const dateTemplate = "Jan 01, 2025 00:00:00";
const imageTemplate = NewYear;
const themeColorTemplate = "red";

export const ThemeProvider = ({ children }) => {
  const [dataTitle, setDataTitle] = useState(titleTemplate);
  const [dataDate, setDataDate] = useState(dateTemplate);
  const [dataImage, setDataImage] = useState(imageTemplate);
  const [dataThemeColor, setDataThemeColor] = useState(themeColorTemplate);

  const toggleTitle = (value) => {
    setDataTitle(value);
  };

  const toggleDate = (value) => {
    setDataDate(value);
  };

  const toggleImage = (value) => {
    setDataImage(value);
  };

  const toggleThemeColor = (value) => {
    setDataThemeColor(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        dataTitle,
        dataDate,
        dataImage,
        dataThemeColor,
        toggleTitle,
        toggleDate,
        toggleImage,
        toggleThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
