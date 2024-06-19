export interface Column {
  // 隐藏列
  visible?: boolean;
  // 类型
  type?: 'seq' | 'radio' | 'checkbox';
  // 列头显示文字
  title?: string;
  // 列头key
  key: string;
  origin?: boolean;
  prefix?: string;
  suffix?: string;
  filter?: {
    [key: string]: (() => any) | any[];
    arguments: any[];
  };
  html?: boolean;
  children?: Column[];
  // 列宽度
  width?: number | string;
}