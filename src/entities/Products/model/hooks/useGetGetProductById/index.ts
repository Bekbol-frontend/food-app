import { queryKeys } from "@/shared/lib/queryKeys";
import { getProductById } from "../../services";
import { useQuery } from "@tanstack/react-query";

export const useGetGetProductById = (id: number | null) => {
  return useQuery({
    queryKey: [queryKeys.productById, id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });
};
