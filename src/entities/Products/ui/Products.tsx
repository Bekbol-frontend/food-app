import { HeaderSection } from "@/shared/ui/HeaderSection";
import ProductsTable from "./ProductsTable/ProductsTable";
import { ContentBlock } from "@/shared/ui/ContentBlock";
import { useGetProducts } from "../model/hooks/useGetProducts";
import ModalProduct from "./ModalProduct/ModalProduct";
import { useCallback, useState } from "react";

function Products() {
  const [modal, setModal] = useState(false);
  const { data, isLoading } = useGetProducts();

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
        <ProductsTable data={data?.data.data} loading={isLoading} />
      </ContentBlock>

      <ModalProduct modal={modal} handleCancel={onHideModal} />
    </>
  );
}

export default Products;
