import type { ColProps } from 'antd'
import type { FormLabelAlign } from '../interface'
import type { Rule } from '../FormItem'
import type { ZFormProps } from '../Form'
import type { ComponentType } from '.'

import * as React from 'react'

export declare type NamePath = string | number | (string | number)[]
export declare type Recordable<T = any> = Record<string, T>

export interface RenderCallbackParams {
  schema: ZFormSchema;
  values: Recordable;
  model: Recordable;
  field: string;
}

export interface ZFormActionType {
  submit: () => Promise<void>;
  setFieldsValue: <T>(values: T) => Promise<void>;
  resetFields: () => Promise<void>;
  getFieldsValue: () => Recordable;
  clearValidate: (name?: string | string[]) => Promise<void>;
  updateSchema: (data: Partial<ZFormSchema> | Partial<ZFormSchema>[]) => Promise<void>;
  resetSchema: (data: Partial<ZFormSchema> | Partial<ZFormSchema>[]) => Promise<void>;
  setProps: (formProps: Partial<ZFormProps>) => Promise<void>;
  removeSchemaByField: (field: string | string[]) => Promise<void>;
  appendSchemaByField: (
    schema: ZFormSchema | ZFormSchema[],
    prefixField: string | undefined,
    first?: boolean | undefined,
  ) => Promise<void>;
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
  scrollToField: (name: NamePath, options?: ScrollOptions) => Promise<void>;
}

export interface ZFormSchema {
  // 是否显示 label 后面的冒号
  colon?: boolean;
  // 
  colProps?: Partial<ColProps>;
  // 渲染组件
  component: ComponentType;
  // Component parameters
  componentProps?:
    | ((opt: {
        schema: ZFormSchema;
        // formActionType: ZFormActionType;
        // formModel: Recordable;
      }) => Recordable)
    | object;
  // 默认值
  defaultValue?: any;
  // 禁用
  dynamicDisabled?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  // 只读
  dynamicReadonly?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  // 设置 label 的 htmlFor 属性
  htmlFor?: string;
  // label 标签的文本
  label: React.ReactNode;
  // 标签文本对齐方式
  labelAlign?: FormLabelAlign;
  // label 标签布局，同 <Col> 组件
  labelCol?: ColProps;
  // 设置 label 标签的宽度
  labelWidth?: string | number;
  // 字段名
  name: string;
  // 是否必填
  required?: boolean;
  // 校验规则
  rules?: Rule[];
  // 是否显示
  visible?: boolean;
}