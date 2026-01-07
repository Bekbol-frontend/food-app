import type { TypeLangs } from "@/shared/types";

type TabItem = { key: TypeLangs; label: string };

export const tabItems: TabItem[] = [
  { key: "kk", label: "Karakalpak" },
  { key: "uz", label: "Uzbek" },
  { key: "ru", label: "Русский" },
];
