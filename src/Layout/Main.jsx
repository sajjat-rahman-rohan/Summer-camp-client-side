/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
// import NavBar from "../pages/Shared/NavBar/NavBar";
import Header from "../pages/Shared/Header/Header";
import { useState } from "react";
import ReactSwitch from "react-switch";
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
      {/* <NavBar></NavBar> */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          {/* <div className="switch flex gap-2">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            <label className="m-1">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div> */}
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
