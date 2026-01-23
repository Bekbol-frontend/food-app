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
import { useMessageContext } from "@/shared/hooks/useMessageContext";
import { useTranslation } from "react-i18next";
import { useCreateProduct } from "../../model/hooks/useCreateProduct";
import type { TypeLangs } from "@/shared/types";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { useGetGetProductById } from "../../model/hooks/useGetGetProductById";
import { ContentLoading } from "@/shared/ui/ContentLoading";
import { ContentError } from "@/shared/ui/ContentError";
// import { useEffect } from "react";

interface IProps {
  closeModal: () => void;
  id: number | null;
}

function FormProduct({ closeModal, id }: IProps) {
  const { contextApi } = useMessageContext();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { sm } = useResponsive();

  const createMutation = useCreateProduct({ form, closeModal });
  const { mutate: createMutate, isPending, isError } = createMutation;

  const {
    data: productData,
    isLoading,
    isError: isGetError,
    error: getError,
  } = useGetGetProductById(id);

  console.log(productData);

  // useEffect(() => {
  //   if (productData?.data.data) {
  //     form.setFieldsValue(productData.data.data);
  //   }

  //   return () => {
  //     form.resetFields();
  //   };
  // }, [productData, form]);

  const onFinish: FormProps<IProductForm>["onFinish"] = (values) => {
    const formData = new FormData();

    formData.append("category_id", values.category_id.toString());
    formData.append("price", values.price.toString());

    if (values.is_available !== undefined) {
      formData.append("is_available", values.is_available.toString());
    }

    Object.keys(values.name).forEach((lang) => {
      formData.append(`name[${lang}]`, values.name[lang as TypeLangs]);
    });

    if (values.description) {
      Object.keys(values.description).forEach((lang) => {
        formData.append(
          `description[${lang}]`,
          values.description![lang as TypeLangs],
        );
      });
    }

    if (values.image && values.image.length > 0) {
      const fileItem = values.image[0];

      if (fileItem.originFileObj) {
        const file = fileItem.originFileObj;
        formData.append("image", file, file.name);
      }
    }

    createMutate(formData);
  };

  const onFinishFailed: FormProps<IProductForm>["onFinishFailed"] = (
    errorInfo,
  ) => {
    const errorInfoArrayName: (string | number | undefined)[] =
      errorInfo.errorFields.map((el) => el.name[1]).slice(0, 3);

    if (errorInfoArrayName.some((el) => el !== undefined)) {
      contextApi["warning"]({
        description: `${t(
          "Please enter a product name ",
        )} ${errorInfoArrayName.join(" ")}`,
      });
    }
  };

  if (isLoading) {
    return <ContentLoading />;
  }

  if (isGetError && getError) {
    return <ContentError title="Error get category" desc={getError.message} />;
  }

  return (
    <Form
      form={form}
      name="create-product"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Row gutter={[space.lg, space.xs]}>
        <Col span={sm ? 12 : 24}>
          <ProductNameTab />
        </Col>

        <Col span={sm ? 12 : 24}>
          <ProductDescTab />
        </Col>

        <Col span={sm ? 12 : 24}>
          <ProductPrice />
        </Col>
        <Col span={sm ? 12 : 24}>
          <ProductCategoryId />
        </Col>
        <Col span={12}>
          <ProductFormImage />
        </Col>
        <Col span={12}>
          <ProductAvailable />
        </Col>
      </Row>

      <Button
        type="primary"
        htmlType="submit"
        loading={isPending}
        danger={isError}
      >
        {t("Create")}
      </Button>
    </Form>
  );
}

export default FormProduct;
