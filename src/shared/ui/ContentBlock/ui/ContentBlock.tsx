import { type ReactNode } from "react";
import styles from "./ContentBlock.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  className?: string;
}

function ContentBlock({ children, className = "" }: IProps) {
  return (
    <div className={clsx([styles.contentBlock, className])}>{children}</div>
  );
}

export default ContentBlock;
