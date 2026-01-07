import dayjs from "dayjs";

export const formatDateTable = (date: string) =>
  dayjs(date).format("DD.MM.YYYY - HH:mm:ss");
