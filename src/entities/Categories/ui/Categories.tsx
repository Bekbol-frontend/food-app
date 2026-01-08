import { ContentBlock } from "@/shared/ui/ContentBlock";
import CategoryTable from "./CategoryTable/CategoryTable";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { useCallback, useState } from "react";
import CategoryModal from "./CreateCategory/CategoryModal/CategoryModal";
import { useGetCategories } from "../model/hooks/useGetCategories";

function Categories() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState<number | null>(null);

  const { data, isLoading } = useGetCategories();

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onHideModal = useCallback(() => {
    setModal(false);

    if (id) {
      setId(null);
    }
  }, [id]);

  const onEdit = useCallback((id: number) => {
    setId(id);
    setModal(true);
  }, []);

  return (
    <>
      <HeaderSection title="Categories" onShowModal={onShowModal} />

      <ContentBlock>
        <CategoryTable
          data={data?.data.data}
          loading={isLoading}
          onEdit={onEdit}
        />
      </ContentBlock>

      <CategoryModal modal={modal} handleCancel={onHideModal} id={id} />
    </>
  );
}

export default Categories;
