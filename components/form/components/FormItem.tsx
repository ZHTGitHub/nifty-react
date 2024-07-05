import type { ZFormSchema } from '../types/form'
import type { ZFormProps } from '../types/form'
import type { Recordable } from '../types/form'

import * as React from 'react'
import { Col } from 'antd'
import { createPlaceholderMessage } from '../helper'

import deepClone from '../../_util/deepClone'
import { isBoolean, isFunction } from '../../_util/is'
import { componentMap } from '../componentMap'

interface ZFormItemProps {
  initialValues: Recordable<any>;
  formProps: Omit<ZFormProps, 'layout' | 'schemas'>;
  schema: ZFormSchema;
}

const defaultProps = {
  initialValues: {},
  formProps: {},
  schema: {},
}

function ZFormItem(props: ZFormItemProps) {
  props = Object.assign(defaultProps, props)
  const { formProps, schema } = props

  const getValues = () => {
    const { initialValues, schema } = props
    const { mergeDynamicData } = props.formProps

    return {
      name: schema.name,
      schema,
      values: {
        ...deepClone(mergeDynamicData),
        ...deepClone(initialValues),
      } as Recordable<any>,
    }
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
    const { disabled: globDisabled } = props.formProps
    const { dynamicDisabled } = props.schema
    const { disabled: itemDisabled = false } = getComponentProps()
    let disabled = !!globDisabled || itemDisabled

    if(isBoolean(dynamicDisabled)) {
      disabled = dynamicDisabled
    }

    if(isFunction(dynamicDisabled)) {
      disabled = dynamicDisabled(getValues())
    }

    return disabled
  }

  function renderComponent() {
    const { component } = schema;

    const Comp = componentMap.get(component) as React.ElementType;

    const { autoSetPlaceHolder, size } = props.formProps

    const propsData: Recordable<any> = {
      // allowClear: true,
      size,
      ...getComponentProps(),
      disabled: getDisable(),
    };

    const isCreatePlaceholder = !propsData.disabled && autoSetPlaceHolder
    // RangePicker place is an array
    if (isCreatePlaceholder && component !== 'RangePicker' && component) {
      propsData.placeholder =
        getComponentProps()?.placeholder || createPlaceholderMessage(component)
    }
    // propsData.formValues = getValues()

    const compAttr = {
      component: schema.component,
      label: schema.label,
      name: schema.name,
      defaultValue: schema.defaultValue,
      ...propsData,
      ...getComponentProps(),
      disabled: getDisable(),
    };

    return <Comp 
      { ...compAttr } 
    ></Comp>
  }

  const { colProps = {} } = schema;
  const { wrapperCol = {} } = formProps;

  const realColProps = { span: 24, ...wrapperCol, ...colProps }

  return <Col 
    { ...realColProps }
  >
    { renderComponent() }
  </Col>
}

export default ZFormItem;
