import type { IProductForm } from "@/entities/Products/model/types";
import { tabItems } from "@/shared/lib/tabItems";
import { Form, Input, Tabs } from "antd";
import { useTranslation } from "react-i18next";

function ProductDescTab() {
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
          <Form.Item<IProductForm>
            label="Description"
            name={["description", el.key]}
            rules={[
              {
                required: true,
                message: t("Please enter a category description!"),
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

export default ProductDescTab;
