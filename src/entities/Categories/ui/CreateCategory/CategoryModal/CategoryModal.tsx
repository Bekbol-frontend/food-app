import { Modal } from "antd";
import CategoryForm from "../CategoryForm/CategoryForm";

interface IProps {
  modal: boolean;
  handleCancel: () => void;
  id: null | number;
}

function CategoryModal(props: IProps) {
  const { modal, handleCancel, id } = props;

  return (
    <Modal open={modal} onCancel={handleCancel} footer={null}>
      <CategoryForm closeModal={handleCancel} id={id} />
    </Modal>
  );
}

export default CategoryModal;
