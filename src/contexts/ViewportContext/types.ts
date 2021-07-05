import { BreakpointDetect } from "src/styles/breakpoints/breakpoint-js";

export type DeviceStatus = {
  isBrowser: boolean;
  isMobile: boolean;
};

export type ViewPort = {
  width: number;
  height: number;
  breakpointStatus: BreakpointDetect;
  deviceStatus: DeviceStatus;
};
