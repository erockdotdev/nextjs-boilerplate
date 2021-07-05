// from: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
import { createContext, useEffect, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import useIsMounted from "src/hooks/useIsMounted";

import { breakpointDetect } from "src/styles/breakpoints/breakpoint-js";
import { ViewPort } from "./types";

import { breakpointDefault, deviceDefault, ViewPortDefault } from "./defaults";

const ViewportContext = createContext<ViewPort>(ViewPortDefault);

const ViewportProvider: React.FC = ({ children }) => {
  const isMounted = useIsMounted();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [breakpointStatus, setBreakpointStatus] = useState(breakpointDefault);
  const [deviceStatus, setDeviceStatus] = useState(deviceDefault);

  const setWidowDimensions = () => {
    const width = window.innerWidth;
    const deviceStatus = {
      isBrowser,
      isMobile,
    };
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setBreakpointStatus(breakpointDetect(width));
    setDeviceStatus(deviceStatus);
  };

  useEffect(() => {
    if (!isMounted) return;
    setWidowDimensions();
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    window.addEventListener("resize", setWidowDimensions);
    return () => window.removeEventListener("resize", setWidowDimensions);
  }, [isMounted]);

  return (
    <ViewportContext.Provider
      value={{ width, height, breakpointStatus, deviceStatus }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

export { ViewportContext, ViewportProvider };
