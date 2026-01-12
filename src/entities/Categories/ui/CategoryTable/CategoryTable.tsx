import { formatDateTable } from "@/shared/lib/formatDateTable";
import type { ICategory } from "../../model/types";
import { Button, Card, Popconfirm, Space, Table, message } from "antd";
import type { TableProps } from "antd";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDeleteCategory } from "../../model/hooks/useDeleteCategory";
import { useStyleTable } from "@/shared/ui/useStyleTable";
import { tableColWidth } from "@/shared/constants/tableColWidth";
import { useTableScrollY } from "@/shared/lib/useTableScrollY";

interface IProps {
  data?: ICategory[];
  loading: boolean;
  onEdit: (id: number) => void;
}

function CategoryTable(props: IProps) {
  const { data, loading, onEdit } = props;
  const { styles } = useStyleTable();

  const [id, setId] = useState<null | number>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { t } = useTranslation();
  const y = useTableScrollY();

  const deleteMutate = useDeleteCategory(messageApi);
  const { mutate, isPending, isSuccess } = deleteMutate;

  useEffect(() => {
    if (isSuccess) setId(null);

    return () => {
      setId(null);
    };
  }, [isSuccess]);

  const confirm = useCallback(
    (id: number) => {
      mutate(id);
      setId(id);
    },
    [mutate]
  );

  const columns: TableProps<ICategory>["columns"] = useMemo(
    () => [
      {
        title: t("ID"),
        dataIndex: "id",
        key: "id",
        width: tableColWidth.id,
        fixed: "start",
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
        render: (_, record) => (
          <Space size="small">
            <Popconfirm
              title={t("Delete category task?")}
              description={t("Are you sure to delete this category task?")}
              onConfirm={() => confirm(record.id)}
              okText={t("Yes")}
              cancelText={t("No")}
            >
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                loading={id === record.id && isPending}
              />
            </Popconfirm>

            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => onEdit(record.id)}
            />
          </Space>
        ),
      },
    ],
    [t, confirm, id, isPending, onEdit]
  );

  if (!data) return null;

  const fakeData = [...data, ...data, ...data];

  return (
    <>
      {contextHolder}
      <Card>
        <Table<ICategory>
          loading={loading}
          rowKey="id"
          columns={columns}
          dataSource={fakeData}
          pagination={false}
          className={styles.customTable}
          scroll={{ x: "max-content", y }}
        />
      </Card>
    </>
  );
}

export default CategoryTable;
