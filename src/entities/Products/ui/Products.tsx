import { HeaderSection } from "@/shared/ui/HeaderSection";
import ProductsTable from "./ProductsTable/ProductsTable";
import { ContentBlock } from "@/shared/ui/ContentBlock";

function Products() {
  return (
    <>
      <HeaderSection title="Products" onShowModal={() => {}} />

      <ContentBlock>
        <ProductsTable />
      </ContentBlock>
    </>
  );
}

export default Products;
