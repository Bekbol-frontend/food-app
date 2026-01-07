import { crateCategory } from "@/entities/Categories/model/services";
import type { ICategoryForm } from "@/entities/Categories/model/types";
import { queryKeys } from "@/shared/lib/queryKeys";
import { tabItems } from "@/shared/lib/tabItems";
import type { TypeLangs } from "@/shared/types";
import { useMutation } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Button, Form, Input, Tabs, message, notification } from "antd";
import { useTranslation } from "react-i18next";

interface IProps {
  closeModal: () => void;
}

function CategoryForm({ closeModal }: IProps) {
  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const [api, contextHolderNotification] = notification.useNotification();

  const [form] = Form.useForm();

  const createMutation = useMutation({
    mutationKey: [queryKeys.categories],
    mutationFn: crateCategory,
    onSuccess: () => {
      form.resetFields();
      closeModal();
      messageApi.open({
        type: "success",
        content: t("Category created successfully!"),
        duration: 2.5,
      });
    },
    onError: (error) => {
      messageApi.open({
        type: "error",
        content: `${t("Error create")} ${error.message}`,
        duration: 2.5,
      });
    },
  });

  const { mutate, isPending, isError } = createMutation;

  const onFinish: FormProps<ICategoryForm>["onFinish"] = (values) => {
    mutate(values);
  };

  const onFinishFailed: FormProps<ICategoryForm>["onFinishFailed"] = (
    errorInfo
  ) => {
    const name = errorInfo.values.name;

    let emptyValues: Array<TypeLangs> = [];

    for (let key in name) {
      if (!name[key as TypeLangs]) {
        emptyValues.push(key as TypeLangs);
      }
    }

    api["warning"]({
      description: `${t("Please enter a category name!")} ${emptyValues.join(
        ", "
      )}`,
    });
  };

  return (
    <>
      {contextHolder}
      {contextHolderNotification}
      <Form
        form={form}
        name="create-category"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Tabs
          type="card"
          destroyOnHidden
          items={tabItems.map((el) => ({
            key: el.key,
            label: el.label,
            forceRender: true,
            style: { borderColor: "red" },
            children: (
              <Form.Item<ICategoryForm>
                label={t("Name")}
                name={["name", el.key]}
                rules={[
                  {
                    required: true,
                    message: t("Please enter a category name!"),
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ),
          }))}
        />

        <Button
          type="primary"
          htmlType="submit"
          loading={isPending}
          danger={isError}
        >
          {isError ? t("Error create") : t("Create")}
        </Button>
      </Form>
    </>
  );
}

export default CategoryForm;
