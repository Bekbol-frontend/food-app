import type { IProductForm } from "@/entities/Products/model/types";
import { Form, InputNumber } from "antd";
import { useTranslation } from "react-i18next";

function ProductPrice() {
  const { t } = useTranslation();

  return (
    <Form.Item<IProductForm>
      label={t("Price")}
      name="price"
      rules={[
        {
          required: true,
          message: t("Please enter a product price!"),
        },
      ]}
    >
      <InputNumber style={{ width: "100%" }} min={0} />
    </Form.Item>
  );
}

export default ProductPrice;
