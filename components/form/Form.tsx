import type { Ref } from 'react'
import type { ColProps } from 'antd'
import type { SizeType } from '../config-provider/SizeContext'
import type { ZFormSchema } from './types/form'
import type { FormLabelAlign } from './interface'
import type { Recordable } from './types/form'

import * as React from 'react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import DisabledContext, { DisabledContextProvider } from '../config-provider/DisabledContext'
import SizeContext from '../config-provider/SizeContext'

import ZFormItem from './components/FormItem'

import { FormContext } from './context'

export type FormLayout = 'horizontal' | 'inline' | 'vertical'

export interface ZFormProps extends React.HTMLAttributes<HTMLFormElement>{
  autoSetPlaceHolder?: boolean;
  colon?: boolean;
  disabled?: boolean;
  initialValues?: Recordable<any>;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  labelWrap?: boolean;
  schemas?: ZFormSchema[];
  size?: SizeType;
  vertical?: boolean;
  wrapperCol?: ColProps;

  onValueChange?: (key: string, value: any) => void;
  onValuesChange?: (changedValues: Recordable, allValues: Recordable) => void;
  setValues?: (values: Recordable) => void;
  values?: Recordable;
}

export interface ZFormRef {
  getFieldsValue: () => Recordable;
  setFieldsValue: (values: Recordable) => void;
}

function ZForm(props: ZFormProps, ref: Ref<unknown> | undefined) {
  const contextDisabled = React.useContext(DisabledContext)

  const {
    colon,
    initialValues = {},
    disabled = contextDisabled,
    // layout = 'horizontal',
    labelAlign = 'right',
    labelCol,
    labelWrap,
    schemas,
    size,
    wrapperCol,
    
    onValueChange,
    onValuesChange,
  } = props

  console.log(props)

  const [values, setValues] = useState<Record<string, any>>(initialValues)

  const handleValueChange = (key: string, value: any) => {
    values[key] = value

    onValueChange?.(key, value)
    onValuesChange?.({ key: value }, values)
  }

  useImperativeHandle(ref, () => {
    return {
      getFieldsValue() {
        return values
      },

      setFieldsValue(fieldValues: Recordable) {
        setValues({ ...values, ...fieldValues })
      }
    }
  })

  return (
    <div>
      <FormContext.Provider value={{
        values,
        setValues: (v) => setValues(v),
        onValueChange: handleValueChange,
        onValuesChange,
      }}>
        <DisabledContextProvider disabled={ disabled }>
          <SizeContext.Provider value={ size }>
            { 
              schemas?.map((schema: ZFormSchema) => (
                <ZFormItem
                  key={ schema.name }
                  initialValues={ initialValues }
                  formProps={{
                    colon,
                    disabled,
                    initialValues,
                    labelAlign,
                    labelCol,
                    labelWrap,
                    wrapperCol,
                  }}
                  schema={ schema }
                ></ZFormItem>
              )) 
            }
          </SizeContext.Provider>
        </DisabledContextProvider>
      </FormContext.Provider>
    </div>
  );
}

export default forwardRef(ZForm)
