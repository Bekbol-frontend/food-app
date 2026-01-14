import type { ICategoryForm } from "@/entities/Categories/model/types";
import { ContentError } from "@/shared/ui/ContentError";
import { ContentLoading } from "@/shared/ui/ContentLoading";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CategoryFormTab from "./CategoryFormTab/CategoryFormTab";
import { useCreateCategory } from "@/entities/Categories/model/hooks/useCreateCategory";
import { useUpdateCategory } from "@/entities/Categories/model/hooks/useUpdateCategory";
import { useGetCategoryById } from "@/entities/Categories/model/hooks/useGetCategoryById";
import { useMessageContext } from "@/shared/hooks/useMessageContext";

interface IProps {
  closeModal: () => void;
  id: null | number;
}

function CategoryForm({ closeModal, id }: IProps) {
  const { t } = useTranslation();
  const { messageApi, contextApi } = useMessageContext();
  const [form] = Form.useForm();

  const createMutation = useCreateCategory({ form, closeModal, messageApi });
  const updateMutation = useUpdateCategory({ form, closeModal, messageApi });
  const {
    data: categoryData,
    isLoading,
    isError: isGetError,
    error: getError,
  } = useGetCategoryById(id);

  const { mutate, isPending, isError } = createMutation;
  const {
    mutate: mutateUpdate,
    isPending: isPendingUpdate,
    isError: isErrorUpdate,
  } = updateMutation;

  const onFinish: FormProps<ICategoryForm>["onFinish"] = (values) => {
    if (id) {
      mutateUpdate({ data: values, id });
      return;
    }

    mutate(values);
  };

  const onFinishFailed: FormProps<ICategoryForm>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log(errorInfo);
    const errorInfoArrayName: (string | number | undefined)[] =
      errorInfo.errorFields.map((el) => el.name[1]).slice(0, 3);

    if (errorInfoArrayName.some((el) => el !== undefined)) {
      contextApi["warning"]({
        description: `${t(
          "Please enter a product name "
        )} ${errorInfoArrayName.join(" ")}`,
      });
    }
  };

  useEffect(() => {
    if (categoryData?.data.data) {
      form.setFieldsValue(categoryData.data.data);
    }

    return () => {
      form.resetFields();
    };
  }, [categoryData, form]);

  if (isLoading) {
    return <ContentLoading />;
  }

  if (isGetError && getError) {
    return <ContentError title="Error get category" desc={getError.message} />;
  }

  return (
    <Form
      form={form}
      name={id ? "update-category-form" : "create-category-form"}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <CategoryFormTab />

      <Button
        type="primary"
        htmlType="submit"
        loading={isPending || isPendingUpdate}
        danger={isError || isErrorUpdate}
      >
        {isError ? t("Error create") : id ? t("Update") : t("Create")}
      </Button>
    </Form>
  );
}

export default CategoryForm;
