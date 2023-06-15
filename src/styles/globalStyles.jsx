import { createGlobalStyle } from "styled-components";
import linearInterpolation from "../helpers/calculateLinearInterpolation";
import "./fonts.css";
import "./normalise.css";

const GlobalStyle = createGlobalStyle`

  :root {
    --colour-primary-100: hsla(0,0%,2%,1);
    --colour-primary-200: hsla(0,0%,12%,1);
    --colour-primary-300: hsla(0,0%,18%,1);
    --colour-primary-400: hsla(0,0%,23%,1);
    --colour-primary-500: hsla(0,0%,46%,1);
    --colour-primary-700: hsla(0,0%,91%,1);
    --colour-primary-800: hsla(0,0%,96%,1);
    --colour-primary-900: hsla(0,0%,100%,1);
    --colour-accent: hsla(274,82%,60%,1);
    --colour-error: hsla(0,100%,66%,1);
    --font-family-sans: 'Inter',sans-serif;
    --font-family-serif: 'Lora',serif;
    --font-family-mono: 'Inconsolata',mono;
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-size-s: ${linearInterpolation(15, 18)};
    --font-size-m: ${linearInterpolation(16, 20)};
    --font-size-l: ${linearInterpolation(18, 24)};
    --font-size-xl: ${linearInterpolation(32, 64)};;
    --font-size-xxl: ${linearInterpolation(64, 128)};;
    --size-xxs: 8px;
    --size-xs: 12px;
    --size-s: ${linearInterpolation(16, 32)};
    --size-m: ${linearInterpolation(24, 60)};
    --size-l: ${linearInterpolation(32, 42)};
    --size-xl: ${linearInterpolation(24, 32)};
    --size-2xl: ${linearInterpolation(32, 60)};
    --size-3xl: ${linearInterpolation(48, 76)};
    --border-xs: 4px;
    --border-s: 10px;
    --border-m: 16px;
  }

  :root.light {
  --background-page: var(--colour-primary-900);
  --background-input: var(--colour-primary-800);
  --background-icon: var(--colour-primary-500);
  --background-slider: var(--colour-primary-500);
  --background-hr: var(--colour-primary-700);
  --text-body: var(--colour-primary-300);
  --text-heading: var(--colour-primary-300);
  --text-subheading: var(--colour-primary-500);
}

:root.dark {
  --theme-font: var(--font-family-sans);
  --background-page: var(--colour-primary-100);
  --background-input: var(--colour-primary-200);
  --background-icon: var(--colour-accent);
  --background-slider: var(--colour-accent);
  --background-hr: var(--colour-primary-400);
  --text-body: var(--colour-primary-900);
  --text-heading: var(--colour-primary-900);
  --text-subheading: var(--colour-primary-500);
}

  body {
    font-family: var(--theme-font);
    background: var(--background-page);
    color: var(--text-body);
    font-size: var(--font-size-s);
    transition-property: background, color, outline, border;
    transition-duration: var(--theme-transition-speed);
  }

  a {
    color: var(--colour-secondary-500)
  }

  a:visited {
    color: var(--colour-secondary-700)
  }

  a:hover, a:focus {
    filter: brightness(120%) saturate(120%);
  }

  a:focus-visible {
    outline: currentColor 2px solid;
    outline-offset: 3px;
  }
`;

export default GlobalStyle;
