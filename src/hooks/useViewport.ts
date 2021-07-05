import { useContext } from "react";
import { ViewportContext } from "src/contexts/ViewportContext";

const useViewport = () => {
  const { width, height, breakpointStatus, deviceStatus } = useContext(
    ViewportContext
  );
  return { width, height, breakpointStatus, deviceStatus };
};

export default useViewport;
