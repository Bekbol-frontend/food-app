import { Modal } from "antd";
import CategoryForm from "../CategoryForm/CategoryForm";

interface IProps {
  modal: boolean;
  handleCancel: () => void;
}

function CategoryModal(props: IProps) {
  const { modal, handleCancel } = props;

  return (
    <Modal open={modal} onCancel={handleCancel} footer={null}>
      <CategoryForm closeModal={handleCancel} />
    </Modal>
  );
}

export default CategoryModal;
