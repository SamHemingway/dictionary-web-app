import React from "react";
import { createCSSVars } from "../../helpers/createCSSVars";
import { THEME } from "../../helpers/constants";

function getInitialDisplayPrefs(type) {
  const preference = window.localStorage.getItem(type);
  const hasPersistedPreference = typeof preference === "string";

  // return the preference if it exists.

  if (hasPersistedPreference) {
    return preference;
  }

  if (type === "theme") {
    // If there is no saved preference, use a media query:
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";

    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return "light";
  }

  if (type === "font") {
    // Return the default font if no preference is stored.
    return "sans";
  }
}

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [font, setFont] = React.useState(getInitialDisplayPrefs("font"));
  const [theme, setTheme] = React.useState(getInitialDisplayPrefs("theme"));

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-font",
      `var(--font-family-${font})`
    );

    window.localStorage.setItem("font", font);
    window.localStorage.setItem("theme", theme);
  }, [font, theme]);

  React.useEffect(() => {
    const themeVars = createCSSVars(THEME[theme]).split(";");
    themeVars.forEach((variable) => {
      const [property, value] = variable.split(":");
      document.documentElement.style.setProperty(property, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ font, setFont, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
