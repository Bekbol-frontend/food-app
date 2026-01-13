import type { FormProps } from "antd";
import { Button, Col, Form, Row } from "antd";
import type { IProductForm } from "../../model/types";
import { space } from "@/shared/constants/space";
import ProductNameTab from "./ProductNameTab/ProductNameTab";
import ProductDescTab from "./ProductDescTab/ProductDescTab";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductCategoryId from "./ProductCategoryId/ProductCategoryId";
import ProductAvailable from "./ProductAvailable/ProductAvailable";
import ProductFormImage from "./ProductFormImage/ProductFormImage";

function FormProduct() {
  const onFinish: FormProps<IProductForm>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<IProductForm>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="create-product"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Row gutter={[space.lg, space.xs]}>
        <Col span={12}>
          <ProductNameTab />
        </Col>
        <Col span={12}>
          <ProductDescTab />
        </Col>
        <Col span={12}>
          <ProductPrice />
        </Col>
        <Col span={12}>
          <ProductCategoryId />
        </Col>
        <Col span={12}>
          <ProductFormImage />
        </Col>
        <Col span={12}>
          <ProductAvailable />
        </Col>
      </Row>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormProduct;
