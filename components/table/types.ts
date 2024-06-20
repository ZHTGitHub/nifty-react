import type { CSSProperties } from 'react'
import type { TableColumnType, TableColumnGroupType, TableColumnProps } from 'antd'

// 日期格式、金额格式、保留小数点多少位

export interface Column extends TableColumnProps {
  // 列的对齐方式
  align?: 'left' | 'right' | 'center';
  // 
  children?: Column[];
  // 列样式类名
  className?: string;
  // 超出宽度自动隐藏
  ellipsis?: boolean;
  // 格式
  format?: string;
  // 过滤
  // filter?: {
  //   [key: string]: (() => any) | any[];
  //   arguments: any[];
  // };
  // html
  html?: boolean;
  // 列头key
  key: string;
  // 
  origin?: boolean;
  // 前缀
  prefix?: string;
  // 样式
  style?: CSSProperties;
  // 后缀
  suffix?: string;
  // 列头显示文字
  title?: string;
  // 类型
  type?: 'checkbox' | 'currency' | 'date' | 'radio' | 'seq';
  // 隐藏列
  visible?: boolean;
  // 列宽度
  width?: number | string;
  // 设置单元格属性
  onCell?: (row: string, rowIndex?: number) => any;
  // 
  onHeaderCell?: (column: TableColumnType<string> | TableColumnGroupType<string>) => any;
}