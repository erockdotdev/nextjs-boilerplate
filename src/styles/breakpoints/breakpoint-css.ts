import { deviceRange } from "src/constants/breakpoints/device-range";

const { mobile, tablet, desktop, desktopXL } = deviceRange;

export const mediaQueryRange = {
  mobile: `(min-width: ${mobile.min}px) and (max-width: ${mobile.max}px)`,
  tablet: `(min-width: ${tablet.min + 1}px) and (max-width: ${tablet.max}px)`,
  desktop: `(min-width: ${desktop.min + 1}px) and (max-width: ${
    desktop.max
  }px)`,
  desktopXL: `(min-width: ${desktopXL.min}px)`,
};

// Examples
// import { mediaQueryRange } from "src/styles/breakpoints/breakpoint-css";

// @media ${mediaQueryRange.mobile} {
//   background-color: green;
// }
// @media ${mediaQueryRange.tablet} {
//   background-color: red;
// }
// @media ${mediaQueryRange.desktop} {
//   background-color: yellow;
// }
// @media ${mediaQueryRange.desktopXL} {
//   background-color: black;
// }
