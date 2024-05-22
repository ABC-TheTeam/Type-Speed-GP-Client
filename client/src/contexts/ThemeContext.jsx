import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  currentTheme: "light",
  setTheme: () => {},
  theme: {
    light: {
      bg: "bg-light",
      text: "text-dark",
    },
    dark: {
      bg: "bg-dark",
      text: "text-white",
    },
  },
});

export function ThemeProvider(props) {
  const { children } = props;
  const [currentTheme, setCurrentTheme] = useState("light");

  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   if (!localTheme) {
  //     localStorage.setItem("theme", "light");
  //   } else if (localTheme === "light" || localTheme === "dark") {
  //     setCurrentTheme(localTheme);
  //   }
  // }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        setTheme: setCurrentTheme,
        theme: {
          light: {
            bg: "bg-light",
            text: "text-dark",
          },
          dark: {
            bg: "bg-dark",
            text: "text-white",
          },
        },
      }}
    >
    {children}
    </ThemeContext.Provider>
  );
}
