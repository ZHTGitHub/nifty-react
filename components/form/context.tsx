import type { ColProps } from 'antd'
import type { FormLabelAlign } from './interface'

import * as React from 'react'

export interface FormContextProps {
  colon?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  onValueChange?: (key: string, value: any) => void;
  setValues?: (values: Record<string, any>) => void;
  validateRegister?: (name:string, cb: Function) => void;
  values?: Record<string, any>;
  vertical: boolean;
  wrapperCol?: ColProps;
}

export const FormContext = React.createContext<FormContextProps>({
  labelAlign: 'right',
  vertical: false,
})