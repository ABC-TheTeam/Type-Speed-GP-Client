import ChatApp from "../components/ChatApp";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function HomePage() {
  const { theme, setTheme, currentTheme} = useContext(ThemeContext)
  return (
    <>
    <div className={`${theme[currentTheme].bg} `} style={{height: "100vh"}}>
      <h1 className={`${theme[currentTheme].text} `}>Home Page</h1>
      <ChatApp />
    </div>
    </>
  );
}
