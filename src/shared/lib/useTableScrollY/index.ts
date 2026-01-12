import { useResponsive } from "@/shared/hooks/useResponsive";

export const useTableScrollY = () => {
  const { sm } = useResponsive();

  return sm ? 85 * 5 : 75 * 5;
};
