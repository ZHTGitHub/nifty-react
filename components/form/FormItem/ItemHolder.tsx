import type { FormItemProps } from '.'

import FormItemLabel from '../FormItemLabel'
import FormItemInput from '../FormItemInput'

import * as React from 'react'

export interface ItemHolderProps extends FormItemProps {
  children?: React.ReactNode;
  fieldId?: string;
  isRequired?: boolean;
  prefixCls: string;
}

export default function ItemHolder(props: ItemHolderProps) {
  const {
    children,
    fieldId,
    isRequired,
    prefixCls,
    required,
  } = props

  return (
    <div>
      <FormItemLabel 
        htmlFor={ fieldId }
        { ...props }
        prefixCls={ prefixCls }
        required={ required ?? isRequired }
      ></FormItemLabel>

      <FormItemInput 
        { ...props }
        prefixCls={ prefixCls }
      >
        { children }
      </FormItemInput>
    </div>
  )
}