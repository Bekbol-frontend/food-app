import type { IProductForm } from "@/entities/Products/model/types";
import { tabItems } from "@/shared/lib/tabItems";
import { Form, Input, Tabs } from "antd";
import { useTranslation } from "react-i18next";

function ProductNameTab() {
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

export default ProductNameTab;
