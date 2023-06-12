/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import { useState } from "react";
import { createContext } from "react";
import "./Deshboard.css";

export const ThemeContext = createContext(null);

const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Header
            onChange={toggleTheme}
            checked={theme === "dark"}
            theme={theme === "light" ? "Light Mode" : "Dark Mode"}
          ></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Main;
