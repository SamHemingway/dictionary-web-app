import React from "react";
import PropTypes from "prop-types";

function getInitialDisplayPrefs(type) {
  const preference = window.localStorage.getItem(type);
  const hasPersistedPreference = typeof preference === "string";

  if (hasPersistedPreference) {
    return preference;
  }

  if (type === "theme") {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";

    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    return "light";
  }

  if (type === "font") {
    return "sans";
  }
}

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [font, setFont] = React.useState(getInitialDisplayPrefs("font"));
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-transition-speed",
      "0.2s"
    );
  }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-font",
      `var(--font-family-${font})`
    );

    window.localStorage.setItem("font", font);
  }, [font]);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ font, setFont, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
