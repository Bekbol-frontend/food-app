import { Grid } from "antd";

const { useBreakpoint } = Grid;

export function useResponsive() {
  return useBreakpoint();
}
