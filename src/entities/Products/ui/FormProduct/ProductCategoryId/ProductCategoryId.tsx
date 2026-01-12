import { CategoryModal, getCategories } from "@/entities/Categories";
import type { IProductForm } from "@/entities/Products/model/types";
import { queryKeys } from "@/shared/lib/queryKeys";
import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Divider, Form, Select } from "antd";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProductCategoryId() {
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onHideModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen && modal) {
        return;
      }
      setOpen(isOpen);
    },
    [modal]
  );

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.categories, i18n.language],
    queryFn: getCategories,
    enabled: open,
  });

  return (
    <>
      <Form.Item<IProductForm>
        label="Category"
        name="category_id"
        rules={[
          {
            required: true,
            message: t("Please enter a category category!"),
          },
        ]}
      >
        <Select
          open={open}
          onOpenChange={handleOpenChange}
          loading={isLoading}
          options={data?.data.data.map((el) => ({
            value: el.id,
            label: el.name,
          }))}
          popupRender={(menu) => {
            return (
              <>
                {menu}
                <Divider style={{ margin: "8px 0" }} />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={onShowModal}
                  style={{ width: "100%" }}
                >
                  {t("Create")}
                </Button>
              </>
            );
          }}
        />
      </Form.Item>
      <CategoryModal modal={modal} handleCancel={onHideModal} id={null} />
    </>
  );
}
