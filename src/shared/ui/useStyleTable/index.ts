import { createStyles } from "antd-style";

export const useStyleTable = createStyles(({ css, prefixCls }) => {
  const antCls = `.${prefixCls}`;

  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
          }
        }
      }
    `,
  };
});
