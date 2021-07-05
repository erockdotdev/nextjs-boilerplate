import { BreakpointDetect } from "src/styles/breakpoints/breakpoint-js";
import { DeviceStatus } from "./types";

export const breakpointDefault: BreakpointDetect = {
  isMobileWidth: false,
  isTabletWidth: false,
  isDesktopWidth: false,
  isDesktopXLWidth: false,
  detectIsDesktopUp: false,
};

export const deviceDefault: DeviceStatus = {
  isBrowser: false,
  isMobile: false,
};

export const ViewPortDefault = {
  width: 0,
  height: 0,
  breakpointStatus: breakpointDefault,
  deviceStatus: deviceDefault,
};
