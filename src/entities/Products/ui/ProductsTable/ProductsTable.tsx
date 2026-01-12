import { Card, Table, Tag, type TableProps } from "antd";
import type { IProduct } from "../../model/types";
import { formatDateTable } from "@/shared/lib/formatDateTable";
import { tableColWidth } from "@/shared/constants/tableColWidth";
import { useStyleTable } from "@/shared/hooks/useStyleTable";
import { useTableScrollY } from "@/shared/lib/useTableScrollY";

interface IProps {
  data?: IProduct[];
  loading: boolean;
}

function ProductsTable({ data, loading }: IProps) {
  const { styles } = useStyleTable();
  const y = useTableScrollY();

  const columns: TableProps<IProduct>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: tableColWidth.id,
      fixed: "start",
    },
    {
      title: "Category name",
      dataIndex: "category_name",
      key: "category_name",
      width: tableColWidth.title,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: tableColWidth.title,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: tableColWidth.desc,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: tableColWidth.price,
    },
    {
      title: "Is available",
      dataIndex: "is_available",
      key: "is_available",
      render: (is_available) => (
        <Tag color={is_available ? "green" : "red"}>
          {is_available ? "Yes" : "No"}
        </Tag>
      ),
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => formatDateTable(date),
    },
    {
      title: "Updated at",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (date) => formatDateTable(date),
    },
  ];

  return (
    <Card>
      <Table<IProduct>
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={false}
        className={styles.customTable}
        rowKey="id"
        scroll={{ x: "max-content", y }}
      />
    </Card>
  );
}

export default ProductsTable;
