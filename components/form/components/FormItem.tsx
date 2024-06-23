import type { ZFormSchema } from '../types/form'
import type { ZFormProps } from '../Form'
import type { Recordable } from '../types/form'

import * as React from 'react'
import { Col } from 'antd'

import { isFunction } from '../../_util/is'
import { componentMap } from '../componentMap'

interface ZFormItemProps {
  formProps: ZFormProps;
  schema: ZFormSchema;
}

const defaultProps = {
  formProps: {},
  schema: {},
}

function ZFormItem(props: ZFormItemProps) {
  props = Object.assign(defaultProps, props)
  const { formProps, schema } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const getComponentProps = () => {
    const { schema } = props
    let { componentProps = {} } = schema

    if (isFunction(componentProps)) {
      componentProps = componentProps({ schema }) ?? {}
    }
    
    return componentProps as Recordable
  }

  const getDisable = () => {
    const { disabled: globDisabled } = formProps
    const { dynamicDisabled } = schema
    const { disabled: itemDisabled = false } = getComponentProps()
    // let disabled = !!globDisabled || itemDisabled

    return itemDisabled || dynamicDisabled || globDisabled
  }

  function renderComponent() {
    const { component } = schema

    const Comp = componentMap.get(component) as React.ElementType

    const compProps = {
      label: schema.label,
      defaultValue: schema.defaultValue,
      ...getComponentProps(),
      disabled: getDisable(),
    }

    return <Comp 
      { ...compProps }
      onChange={ handleChange }
    ></Comp>
  }

  const { colProps = {} } = schema
  const { wrapperCol = {} } = formProps

  const realColProps = { ...wrapperCol, ...colProps }

  return <Col { ...realColProps }>
    { renderComponent() }
  </Col>
}

export default ZFormItem