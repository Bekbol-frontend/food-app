import { Modal } from "antd";
import FormProduct from "../FormProduct/FormProduct";

interface IProps {
  modal: boolean;
  handleCancel: () => void;
}

function ModalProduct({ modal, handleCancel }: IProps) {
  return (
    <Modal open={modal} onCancel={handleCancel} footer={null} width={1000}>
      <FormProduct />
    </Modal>
  );
}

export default ModalProduct;
