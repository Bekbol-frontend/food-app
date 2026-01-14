import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../services";
import { useMessageContext } from "@/shared/hooks/useMessageContext";
import { useTranslation } from "react-i18next";
import { queryKeys } from "@/shared/lib/queryKeys";
import type { FormInstance } from "antd";

interface IProps {
  form: FormInstance<any>;
  closeModal: () => void;
}

export const useCreateProduct = ({ form, closeModal }: IProps) => {
  const queryClient = useQueryClient();
  const { messageApi } = useMessageContext();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.products] });
      messageApi.success(t("Product created successfully!"));
      closeModal();
      form.resetFields();
    },
    onError: (error) => {
      messageApi.error(`${t("Error create")} ${error.message}`);
    },
  });
};
