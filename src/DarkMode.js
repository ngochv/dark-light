import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";

import "./DarkMode.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

function DarkMode() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setDark();
      setTheme("dark");
    } else {
      if (localStorage.getItem("theme") === "dark") setDark();
      else setLight();
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") setDark();
    else setLight();

    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <span>☀️</span>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      <span>🌒</span>
    </div>
  );
}

export default DarkMode;
