import type { IProductForm } from "@/entities/Products/model/types";
import { Checkbox, Form } from "antd";
import { useTranslation } from "react-i18next";

function ProductAvailable() {
  const { t } = useTranslation();

  return (
    <Form.Item<IProductForm>
      name="is_available"
      valuePropName="checked"
      label={null}
    >
      <Checkbox>{t("Available")}</Checkbox>
    </Form.Item>
  );
}

export default ProductAvailable;
