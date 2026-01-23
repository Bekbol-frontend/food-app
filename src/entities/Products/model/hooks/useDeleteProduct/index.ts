import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services";
import { queryKeys } from "@/shared/lib/queryKeys";
import { useMessageContext } from "@/shared/hooks/useMessageContext";
import type { Dispatch, SetStateAction } from "react";

export const useDeleteProduct = (
  setId: Dispatch<SetStateAction<number | null>>,
) => {
  const { contextApi } = useMessageContext();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.products] });
      contextApi.success({ description: "Product deleted successfully!" });
      setId(null);
    },
    onError: (error) => {
      contextApi.error({ description: `Error: ${error.message}` });
    },
  });
};
