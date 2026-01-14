import { HeaderSection } from "@/shared/ui/HeaderSection";
import ProductsTable from "./ProductsTable/ProductsTable";
import { ContentBlock } from "@/shared/ui/ContentBlock";
import ModalProduct from "./ModalProduct/ModalProduct";
import { useCallback, useState } from "react";

function Products() {
  const [modal, setModal] = useState(false);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onHideModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <HeaderSection title="Products" onShowModal={onShowModal} />

      <ContentBlock>
        <ProductsTable />
      </ContentBlock>

      <ModalProduct modal={modal} handleCancel={onHideModal} />
    </>
  );
}

export default Products;
