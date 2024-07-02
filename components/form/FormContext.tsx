import type { Recordable } from './types/form'

import * as React from 'react'

export interface FormContextProps {
  onValueChange?: (key: string, value: any) => void;
  onValuesChange?: (changedValues: Recordable, allValues: Recordable) => void;
  setValues?: (values: Recordable) => void;
  values?: Recordable;
}

export const FormContext = React.createContext<FormContextProps>({})