import TestTyping from "../components/TestTyping";

import useFetch from "../hooks/useFetch"

import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Game() {
  const { theme, setTheme, currentTheme} = useContext(ThemeContext)

  return (
    <>
    <div className={`d-flex justify-content-center ${theme[currentTheme].bg} `} style={{height: "100vh"}}>
      <TestTyping />
    </div>
    </>
  );
}
