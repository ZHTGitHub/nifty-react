import type { ColProps } from 'antd'

import * as React from 'react'
import { Col } from 'antd'
import classNames from 'classnames'

import { FormContext } from './context'

interface FormItemInputMiscProps {
  children: React.ReactNode;
  prefixCls: string;
}

export interface FormItemInputProps {
  // 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个
  extra?: React.ReactNode;
  // 
  fieldId?: string;
  // 提示信息，如不设置，则会根据校验规则自动生成
  help?: React.ReactNode;
  // 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
  wrapperCol?: ColProps;
}

const FormItemInput: React.FC<FormItemInputProps & FormItemInputMiscProps> = (props) => {
  const {
    children,
    // extra,
    // fieldId,
    // help,
    prefixCls,
    wrapperCol,
  } = props

  const baseClassName = `${ prefixCls }-item`

  const formContext = React.useContext(FormContext)

  // const mergedWrapperCol: ColProps = wrapperCol || formContext.wrapperCol || {}

  const className = classNames(`${baseClassName}-control`)

  // Pass to sub FormItem should not with col info
  const subFormContext = React.useMemo(() => ({ ...formContext }), [formContext])
  // delete subFormContext.labelCol
  // delete subFormContext.wrapperCol

  return (
    <FormContext.Provider value={ subFormContext }>
      <Col { ...wrapperCol } className={ className }>
        { children }
      </Col>
    </FormContext.Provider>
  )
}

export default FormItemInput