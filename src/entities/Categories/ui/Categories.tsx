import { ContentBlock } from "@/shared/ui/ContentBlock";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../model/services";
import CategoryTable from "./CategoryTable/CategoryTable";
import { useTranslation } from "react-i18next";
import { queryKeys } from "@/shared/lib/queryKeys";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { useCallback, useState } from "react";
import CategoryModal from "./CreateCategory/CategoryModal/CategoryModal";

function Categories() {
  const [modal, setModal] = useState(false);
  const { i18n } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.categories, i18n.language],
    queryFn: getCategories,
  });

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onHideModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <HeaderSection title="Categories" onShowModal={onShowModal} />
      <ContentBlock>
        <CategoryTable data={data?.data.data} loading={isLoading} />
      </ContentBlock>

      <CategoryModal modal={modal} handleCancel={onHideModal} />
    </>
  );
}

export default Categories;
