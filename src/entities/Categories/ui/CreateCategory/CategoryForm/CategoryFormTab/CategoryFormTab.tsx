import type { ICategoryForm } from "@/entities/Categories/model/types";
import { tabItems } from "@/shared/lib/tabItems";
import { Form, Input, Tabs } from "antd";
import { useTranslation } from "react-i18next";

function CategoryFormTab() {
  const { t } = useTranslation();

  return (
    <Tabs
      type="card"
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
  );
}

export default CategoryFormTab;
