import type { ColProps } from 'antd'
import type { SizeType } from '../../config-provider/SizeContext'
import type { FormLabelAlign } from '../interface'
import type { Rule } from '../FormItem'
import type { ComponentType } from '.'

import * as React from 'react'

export declare type FormLayout = 'horizontal' | 'inline' | 'vertical'
export declare type NamePath = string | number | (string | number)[]
export declare type Recordable<T = any> = Record<string, T>

export interface RenderCallbackParams {
  name: string;
  schema: ZFormSchema;
  values: Recordable;
}

export interface ZFormProps extends React.HTMLAttributes<HTMLFormElement>{
  // 自动设置表单内组件的 placeholder
  autoSetPlaceHolder?: boolean;
  // 向表单内所有组件传递 colon 属性
  colon?: boolean;
  // 向表单内所有组件传递 disabled 属性
  disabled?: boolean;
  // 初始值
  initialValues?: Recordable<any>;
  // 布局
  layout?: FormLayout;
  // label 布局
  labelAlign?: FormLabelAlign;
  // 整个表单通用 LabelCol 配置
  labelCol?: ColProps;
  // 向表单内所有组件传递 readonly 属性
  readonly?: boolean;
  // 表单配置，见下方 ZFormSchema 配置
  schemas?: ZFormSchema[];
  // 向表单内所有组件传递 size 参数
  size?: SizeType;
  // 整个表单通用 wrapperCol 配置
  wrapperCol?: ColProps;
  // 字段值更新时触发回调事件
  onValueChange?: (key: string, value: any) => void;
  // 字段值更新时触发回调事件
  onValuesChange?: (changedValues: Recordable, allValues: Recordable) => void;
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
  removeSchemaByField: (name: string | string[]) => Promise<void>;
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
  // 盖统一设置的 colon
  colon?: boolean;
  // 
  colProps?: Partial<ColProps>;
  // 组件类型
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
  // 校验规则
  dynamicRules?: (renderCallbackParams: RenderCallbackParams) => Rule[];
  // 设置 label 的 htmlFor 属性
  htmlFor?: string;
  // 标签名
  label: React.ReactNode;
  // 标签文本对齐方式
  labelAlign?: FormLabelAlign;
  // label 标签布局，同 <Col> 组件
  labelCol?: ColProps;
  // 盖统一设置的 labelWidth
  labelWidth?: string | number;
  // 字段名
  name: string;
  // 是否必填
  required?: boolean;
  // 校验规则
  rules?: Rule[];
  // 组件后面的内容
  suffix?: string | number | ((values: RenderCallbackParams) => string | number);
  // 是否显示
  visible?: boolean;
}