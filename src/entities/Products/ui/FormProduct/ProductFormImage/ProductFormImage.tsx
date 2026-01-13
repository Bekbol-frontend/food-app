import type { IProductForm } from "@/entities/Products/model/types";
import { Form, Input } from "antd";

function ProductFormImage() {
  return (
    <Form.Item<IProductForm> name="image">
      <Input />
    </Form.Item>
  );
}

export default ProductFormImage;
