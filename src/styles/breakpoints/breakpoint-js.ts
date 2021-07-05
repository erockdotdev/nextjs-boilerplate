import { deviceRange } from "src/constants/breakpoints/device-range";

export type BreakpointDetect = {
  isMobileWidth: boolean;
  isTabletWidth: boolean;
  isDesktopWidth: boolean;
  isDesktopXLWidth: boolean;
  detectIsDesktopUp: boolean;
};

const detectIsMobile = (deviceWidth: number) =>
  deviceWidth > deviceRange.mobile.min && deviceWidth <= deviceRange.mobile.max;

const detectIsTablet = (deviceWidth: number) =>
  deviceWidth > deviceRange.tablet.min && deviceWidth <= deviceRange.tablet.max;

const detectIsDesktop = (deviceWidth: number) =>
  deviceWidth > deviceRange.desktop.min &&
  deviceWidth <= deviceRange.desktop.max;

const detectIsDesktopXL = (deviceWidth: number) =>
  deviceWidth >= deviceRange.desktopXL.min &&
  deviceWidth <= deviceRange.desktopXL.max;

const detectIsDesktopUp = (deviceWidth: number) =>
  detectIsDesktop(deviceWidth) || detectIsDesktopXL(deviceWidth);

export const breakpointDetect = (deviceWidth: number): BreakpointDetect => ({
  isMobileWidth: detectIsMobile(deviceWidth),
  isTabletWidth: detectIsTablet(deviceWidth),
  isDesktopWidth: detectIsDesktop(deviceWidth),
  isDesktopXLWidth: detectIsDesktopXL(deviceWidth),
  detectIsDesktopUp: detectIsDesktopUp(deviceWidth),
});
