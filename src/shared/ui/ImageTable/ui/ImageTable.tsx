import { Image } from "antd";
import { clsx } from "@/shared/lib/clsx";
import styles from "./ImageTable.module.scss";

interface IProps {
  imgUrl: string;
  className?: string;
  alt?: string;
}

function ImageTable({ imgUrl, className = "", alt }: IProps) {
  return (
    <Image
      className={clsx([styles.img, className])}
      alt={alt ?? "image product"}
      src={imgUrl}
    />
  );
}

export default ImageTable;
