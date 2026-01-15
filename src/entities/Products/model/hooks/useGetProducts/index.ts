import { queryKeys } from "@/shared/lib/queryKeys";
import { getProducts } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export function useGetProducts(search: string) {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: [queryKeys.products, i18n.language, search],
    queryFn: () => getProducts(search),
  });
}
