import type { ColProps } from 'antd'
import type { FormLabelAlign } from './interface'

import * as React from 'react'

export interface FormContextProps {
  colon?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  vertical: boolean;
  wrapperCol?: ColProps;
}

export const FormContext = React.createContext<FormContextProps>({
  labelAlign: 'right',
  vertical: false,
})