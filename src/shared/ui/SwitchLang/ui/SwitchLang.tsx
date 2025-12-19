import { Lang, LangText } from "../types";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const items: MenuProps["items"] = [
  {
    label: LangText.KK,
    key: Lang.KK,
  },
  {
    label: LangText.UZ,
    key: Lang.UZ,
  },
  {
    label: LangText.RU,
    key: Lang.RU,
  },
];

function SwitchLang() {
  const { i18n } = useTranslation();

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: [i18n.language],
        onClick: (e) => i18n.changeLanguage(e.key),
      }}
      trigger={["click"]}
    >
      <Button icon={<DownOutlined />} iconPlacement="end" type="primary">
        {i18n.language === Lang.KK
          ? LangText.KK
          : i18n.language === Lang.UZ
          ? LangText.UZ
          : LangText.RU}
      </Button>
    </Dropdown>
  );
}

export default SwitchLang;
