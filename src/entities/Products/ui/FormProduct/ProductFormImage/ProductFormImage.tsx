import { useState } from "react";
import type { IProductForm } from "@/entities/Products/model/types";
import { Form, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { UploadFile, UploadProps } from "antd";
import { useMessageContext } from "@/shared/hooks/useMessageContext";

function ProductFormImage() {
  const { t } = useTranslation();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const { messageApi } = useMessageContext();

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const beforeUpload = (file: File) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ];
    const isAllowedType = allowedTypes.includes(file.type);

    if (!isAllowedType) {
      messageApi.error(t("Only images can be uploaded!"));
      return Upload.LIST_IGNORE;
    }

    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      messageApi.error(t("Image size must be less than 5MB!"));
      return Upload.LIST_IGNORE;
    }

    return false;
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t("Upload an image")}</div>
    </button>
  );

  return (
    <>
      <Form.Item<IProductForm>
        name="image"
        label={t("Product image")}
        rules={[
          {
            required: true,
            message: t("Please enter a product image!"),
          },
        ]}
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e?.fileList;
        }}
      >
        <Upload
          accept=".jpg,.jpeg,.png,.gif,.svg"
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          onPreview={handlePreview}
          beforeUpload={beforeUpload}
          maxCount={1}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </Form.Item>

      <Modal
        open={previewOpen}
        title={t("Preview image")}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}

export default ProductFormImage;
