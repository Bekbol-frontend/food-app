import { queryKeys } from "@/shared/lib/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "../../services";
import { useTranslation } from "react-i18next";
import type { IMutationCategoryProps } from "../../types";

export const useUpdateCategory = ({
  form,
  closeModal,
  messageApi,
}: IMutationCategoryProps) => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.categories] });
      form.resetFields();
      closeModal();
      messageApi.open({
        type: "success",
        content: t("Category updated successfully!"),
        duration: 2.5,
      });
    },
    onError: (error) => {
      messageApi.open({
        type: "error",
        content: `${t("Error update")} ${error.message}`,
        duration: 2.5,
      });
    },
  });
};
