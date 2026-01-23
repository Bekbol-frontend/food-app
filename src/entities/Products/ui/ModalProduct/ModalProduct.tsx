import { Modal } from "antd";
import FormProduct from "../FormProduct/FormProduct";
import { useTranslation } from "react-i18next";

interface IProps {
  modal: boolean;
  handleCancel: () => void;
  id: number | null;
}

function ModalProduct({ modal, handleCancel, id }: IProps) {
  const { t } = useTranslation();

  return (
    <Modal
      title={t(id ? "Update" : "Create")}
      open={modal}
      onCancel={handleCancel}
      footer={null}
      width={1000}
    >
      <FormProduct closeModal={handleCancel} id={id} />
    </Modal>
  );
}

export default ModalProduct;
