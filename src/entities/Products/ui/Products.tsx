import { HeaderSection } from "@/shared/ui/HeaderSection";
import ProductsTable from "./ProductsTable/ProductsTable";
import { ContentBlock } from "@/shared/ui/ContentBlock";
import ModalProduct from "./ModalProduct/ModalProduct";
import { useCallback, useState } from "react";

function Products() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState<number | null>(null);

  const onEdit = useCallback((id: number) => {
    setId(id);
    setModal(true);
  }, []);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onHideModal = useCallback(() => {
    setModal(false);

    if (id) {
      setId(null);
    }
  }, [id]);

  return (
    <>
      <HeaderSection title="Products" onShowModal={onShowModal} />

      <ContentBlock>
        <ProductsTable onEdit={onEdit} />
      </ContentBlock>

      <ModalProduct modal={modal} handleCancel={onHideModal} />
    </>
  );
}

export default Products;
