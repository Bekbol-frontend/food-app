import { useMemo } from "react";
import { Card, Divider, Input, Table, Tag, type TableProps } from "antd";
import type { IProduct } from "../../model/types";
import { formatDateTable } from "@/shared/lib/formatDateTable";
import { tableColWidth } from "@/shared/constants/tableColWidth";
import { useStyleTable } from "@/shared/hooks/useStyleTable";
import { useTableScrollY } from "@/shared/lib/useTableScrollY";
import { useTranslation } from "react-i18next";
import { ImageTable } from "@/shared/ui/ImageTable";
import { useGetProducts } from "../../model/hooks/useGetProducts";
import { SearchOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/shared/hooks/useDebounce";

function ProductsTable() {
  const { styles } = useStyleTable();
  const { t } = useTranslation();
  const y = useTableScrollY();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const searchValue = useDebounce(search);

  const { data, isLoading } = useGetProducts(searchValue);

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
      <Input
        placeholder="Search..."
        suffix={<SearchOutlined />}
        style={{
          width: "220px",
        }}
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
      <Divider />
      <Table<IProduct>
        columns={columns}
        dataSource={data?.data.data}
        loading={isLoading}
        className={styles.customTable}
        rowKey="id"
        scroll={{ x: "max-content", y }}
        pagination={false}
        // pagination={{
        //   current: 1,
        //   pageSize: 3,
        //   total: 150,
        //   showSizeChanger: true,
        //   pageSizeOptions: [5, 10, 20, 50, 100],
        //   onChange: (page, pageSize) => console.log(page, pageSize),
        // }}
      />
    </Card>
  );
}

export default ProductsTable;
