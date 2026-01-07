import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services";
import { queryKeys } from "@/shared/lib/queryKeys";
import { useTranslation } from "react-i18next";

export const useGetCategories = () => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: [queryKeys.categories, i18n.language],
    queryFn: getCategories,
  });
};
