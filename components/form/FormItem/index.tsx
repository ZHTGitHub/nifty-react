import type { FormItemInputProps } from '../FormItemInput'
import type { ZFormItemLabelProps } from '../FormItemLabel'

import * as React from 'react'

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
  prefixCls?: string;
  required?: boolean;
  rules?: Rule[];
}

function InternalFormItem<Values = any>(props: FormItemProps<Values>): React.ReactElement {
  const {
    children,
    prefixCls,
    required,
    rules,
  } = props

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

  return (
    <ItemHolder
      { ...props }
      prefixCls={ prefixCls }
      isRequired={ isRequired }
    >
      { children }
    </ItemHolder>
  )
}

const ZFormItem = InternalFormItem

export default ZFormItem