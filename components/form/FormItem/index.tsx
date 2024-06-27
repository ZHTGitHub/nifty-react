import type { FormItemInputProps } from '../FormItemInput'
import type { ZFormItemLabelProps } from '../FormItemLabel'

import * as React from 'react'
import { useContext, useState, useEffect } from 'react'

import { FormContext } from '../context'

import ItemHolder from './ItemHolder'

type StoreValue = any
type RuleType = 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email'

export interface Rule {
  warningOnly?: boolean;
  enum?: StoreValue[];
  len?: number;
  max?: number;
  message?: string | React.ReactElement;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  transform?: (value: StoreValue) => StoreValue;
  type?: RuleType;
  whitespace?: boolean;
  /** Customize rule level `validateTrigger`. Must be subset of Field `validateTrigger` */
  validateTrigger?: string | string[];
} 

export interface FormItemProps<Values = any> extends ZFormItemLabelProps, FormItemInputProps {
  children?: React.ReactNode;
  name?: string;
  prefixCls?: string;
  required?: boolean;
  rules?: Rule[];
}

function InternalFormItem<Values = any>(props: FormItemProps<Values>): React.ReactElement {
  const {
    children,
    name,
    prefixCls,
    required,
    rules,
  } = props

  const { values, onValueChange } = useContext(FormContext)
  const [value, setValue] = useState<string | number | boolean>()

  useEffect(() => {
      if(value !== values?.[name]) {
        setValue(values?.[name])
      }
  }, [
    values, 
    values?.[name]
  ])

  const isRequired =
    required !== undefined
      ? required
      : !!(
          rules &&
          rules.some((rule) => {
            if (rule && typeof rule === 'object' && rule.required && !rule.warningOnly) {
              return true
            }

            return false
          })
        )

  console.log(name, values)

  const childEle = React.Children.toArray(children).length > 1 ? children : React.cloneElement(children, {
    value: values?.[name],
    onChange: (event: React.ChangeEvent<HTMLInputElement> | string | number | boolean) => { 
      const value = event?.target?.value || event
      setValue(value)
      onValueChange?.(name, value)
    }
  })


  return (
    <ItemHolder
      { ...props }
      prefixCls={ prefixCls }
      isRequired={ isRequired }
    >
      { childEle }
    </ItemHolder>
  )
}

const ZFormItem = InternalFormItem

export default ZFormItem