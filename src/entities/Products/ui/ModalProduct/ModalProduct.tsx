import { Modal } from "antd";
import FormProduct from "../FormProduct/FormProduct";
import { useTranslation } from "react-i18next";

interface IProps {
  modal: boolean;
  handleCancel: () => void;
}

function ModalProduct({ modal, handleCancel }: IProps) {
  const { t } = useTranslation();

  return (
    <Modal
      title={t("Create")}
      open={modal}
      onCancel={handleCancel}
      footer={null}
      width={1000}
    >
      <FormProduct closeModal={handleCancel} />
    </Modal>
  );
}

export default ModalProduct;
