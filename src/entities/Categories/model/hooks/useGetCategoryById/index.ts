import { queryKeys } from "@/shared/lib/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../services";

export const useGetCategoryById = (id: number | null) => {
  return useQuery({
    queryKey: [queryKeys.categoryById, id],
    queryFn: () => getCategoryById(id!),
    enabled: !!id,
  });
};
