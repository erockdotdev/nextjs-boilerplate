import { chromeDeviceMaxWidth } from "./chrome-breakpoints";

export const deviceRange = {
  mobile: {
    min: 0,
    max: chromeDeviceMaxWidth.mobileL,
  },
  tablet: {
    min: chromeDeviceMaxWidth.mobileL,
    max: chromeDeviceMaxWidth.tablet,
  },
  desktop: {
    min: chromeDeviceMaxWidth.tablet,
    max: chromeDeviceMaxWidth.laptopL,
  },
  desktopXL: {
    min: chromeDeviceMaxWidth.desktop,
    max: Infinity,
  },
};
