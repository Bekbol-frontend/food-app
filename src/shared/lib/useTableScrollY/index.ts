import { useResponsive } from "@/shared/hooks/useResponsive";

export const useTableScrollY = () => {
  const { sm } = useResponsive();

  return sm ? 90 * 5 : 80 * 5; 
};
