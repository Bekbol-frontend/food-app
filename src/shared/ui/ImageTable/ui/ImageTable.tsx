import { Flex } from "antd";
import styles from "./ImageTable.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  imgUrl: string;
  className?: string;
  alt?: string;
}

function ImageTable({ imgUrl, className = "", alt }: IProps) {
  return (
    <Flex
      align="center"
      justify="center"
      className={clsx([styles.flex, className])}
    >
      <img src={imgUrl} alt={alt ?? "image"} />
    </Flex>
  );
}

export default ImageTable;
