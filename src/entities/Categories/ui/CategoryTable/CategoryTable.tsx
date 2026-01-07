import { formatDateTable } from "@/shared/lib/formatDateTable";
import type { ICategory } from "../../model/types";
import { Button, Card, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface IProps {
  data?: ICategory[];
  loading: boolean;
}

function CategoryTable(props: IProps) {
  const { data, loading } = props;
  const { t } = useTranslation();

  const columns: TableProps<ICategory>["columns"] = useMemo(
    () => [
      {
        title: t("ID"),
        dataIndex: "id",
        key: "id",
      },
      {
        title: t("Name"),
        dataIndex: "name",
        key: "name",
      },
      {
        title: t("Created At"),
        dataIndex: "created_at",
        key: "created_at",
        render: (created_at) => formatDateTable(created_at),
      },
      {
        title: t("Updated At"),
        dataIndex: "updated_at",
        key: "updated_at",
        render: (updated_at) => formatDateTable(updated_at),
      },
      {
        title: t("Action"),
        key: "action",
        render: () => (
          <Space size="small">
            <Button type="primary" danger icon={<DeleteOutlined />} />
            <Button type="primary" icon={<EditOutlined />} />
          </Space>
        ),
      },
    ],
    [t]
  );

  return (
    <Card>
      <Table<ICategory>
        loading={loading}
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </Card>
  );
}

export default CategoryTable;
