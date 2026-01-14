import { Card, Table, Tag, type TableProps } from "antd";
import type { IProduct } from "../../model/types";
import { formatDateTable } from "@/shared/lib/formatDateTable";
import { tableColWidth } from "@/shared/constants/tableColWidth";
import { useStyleTable } from "@/shared/hooks/useStyleTable";
import { useTableScrollY } from "@/shared/lib/useTableScrollY";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { ImageTable } from "@/shared/ui/ImageTable";
import { useGetProducts } from "../../model/hooks/useGetProducts";

function ProductsTable() {
  const { data, isLoading } = useGetProducts();

  const { styles } = useStyleTable();
  const y = useTableScrollY();
  const { t } = useTranslation();

  const columns: TableProps<IProduct>["columns"] = useMemo(
    () => [
      {
        title: t("ID"),
        dataIndex: "id",
        key: "id",
        width: tableColWidth.id,
        fixed: "start",
      },
      {
        title: t("Image"),
        dataIndex: "image",
        key: "image",
        render: (image) => <ImageTable imgUrl={image} alt="product-image" />,
      },
      {
        title: t("Category name"),
        dataIndex: "category_name",
        key: "category_name",
        align: "center",
        width: tableColWidth.title,
        sorter: (a, b) => a.category_name.localeCompare(b.category_name),
      },
      {
        title: t("Product name"),
        dataIndex: "name",
        key: "name",
        align: "center",
        width: tableColWidth.title,
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: t("Product description"),
        dataIndex: "description",
        key: "description",
        width: tableColWidth.desc,
      },
      {
        title: t("Price"),
        dataIndex: "price",
        key: "price",
        width: tableColWidth.price,
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: t("Is available"),
        dataIndex: "is_available",
        key: "is_available",
        align: "center",
        render: (is_available) => (
          <Tag color={is_available ? "green" : "red"}>
            {is_available ? "Yes" : "No"}
          </Tag>
        ),
      },
      {
        title: t("Created at"),
        dataIndex: "created_at",
        key: "created_at",
        align: "center",
        render: (date) => formatDateTable(date),
      },
      {
        title: t("Updated at"),
        dataIndex: "updated_at",
        key: "updated_at",
        align: "center",
        render: (date) => formatDateTable(date),
      },
    ],
    [t]
  );

  return (
    <Card>
      <Table<IProduct>
        columns={columns}
        dataSource={data?.data.data}
        loading={isLoading}
        pagination={false}
        className={styles.customTable}
        rowKey="id"
        scroll={{ x: "max-content", y }}
      />
    </Card>
  );
}

export default ProductsTable;
