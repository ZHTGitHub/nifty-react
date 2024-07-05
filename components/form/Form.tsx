import type { Ref } from 'react'
import type { ZFormProps, ZFormSchema } from './types/form'
import type { Recordable } from './types/form'

import * as React from 'react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import DisabledContext, { DisabledContextProvider } from '../config-provider/DisabledContext'
import SizeContext from '../config-provider/SizeContext'
import deepClone from '../_util/deepClone'

import ZFormItem from './components/FormItem'

import { FormContext } from './FormContext'

export interface ZFormRef {
  getFieldsValue: () => Recordable;
  setFieldsValue: (values: Recordable) => void;
  resetFieldsValue: () => void;
  clearFieldsValue: () => void;
}

function ZForm(props: ZFormProps, ref: Ref<unknown> | undefined) {
  const contextDisabled = React.useContext(DisabledContext)

  const {
    autoSetPlaceHolder,
    colon,
    initialValues = {},
    disabled = contextDisabled,
    labelAlign = 'right',
    labelCol,
    mergeDynamicData,
    schemas,
    size,
    wrapperCol,
    
    onValueChange,
    onValuesChange,
  } = props

  const names = schemas?.map(schema => schema.name)
  
  const [values, setValues] = useState<Recordable>(deepClone(initialValues))

  const handleValueChange = (key: string, value: any) => {
    values[key] = value

    onValueChange?.(key, value)
    onValuesChange?.({ key: value }, values)
  }

  useImperativeHandle(ref, () => {
    return {
      getFieldsValue() {
        return deepClone(values)
      },

      setFieldsValue(fieldValues: Recordable) {
        const realFieldValues: Recordable = {}

        for(let key in fieldValues) {
          if(names?.includes(key)) {
            realFieldValues[key] = fieldValues[key]
          }
        }

        setValues(deepClone(realFieldValues))
      },

      resetFieldsValue() {
        setValues(deepClone(initialValues))
      },

      clearFieldsValue() {
        setValues({})
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
                  initialValues={ deepClone(initialValues) }
                  formProps={{
                    autoSetPlaceHolder,
                    colon,
                    disabled,
                    initialValues: deepClone(initialValues),
                    labelAlign,
                    labelCol,
                    mergeDynamicData,
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
