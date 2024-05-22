import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeContext";
// import { ThemeContext } from "./contexts/ThemeContext";
// import { useContext } from "react";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
