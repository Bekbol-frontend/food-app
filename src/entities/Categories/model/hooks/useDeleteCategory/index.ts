import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMutation } from "../../services";
import { queryKeys } from "@/shared/lib/queryKeys";
import { useTranslation } from "react-i18next";
import type { MessageInstance } from "antd/es/message/interface";
import type { Dispatch, SetStateAction } from "react";

export const useDeleteCategory = (
  messageApi: MessageInstance,
  setId: Dispatch<SetStateAction<number | null>>,
) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: deleteMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.categories] });
      messageApi.open({
        type: "success",
        content: t("Category deleted successfully!"),
        duration: 2.5,
      });
      setId(null);
    },
    onError: (error) => {
      messageApi.open({
        type: "error",
        content: `${t("Error delete")} ${error.message}`,
        duration: 2.5,
      });
    },
  });
};
