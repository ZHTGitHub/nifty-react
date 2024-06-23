import type { ColProps } from 'antd'
import type { FormLabelAlign } from './interface'

import * as React from 'react'
import { Col } from 'antd'
import classNames from 'classnames'

export interface ZFormItemLabelProps {
  // 否显示 label 后面的冒号
  colon?: boolean;
  // 设置 label 的 htmlFor 属性
  htmlFor?: string;
  // label 标签的文本
  label?: React.ReactNode;
  // 标签文本对齐方式
  labelAlign?: FormLabelAlign;
  // label 标签布局，同 <Col> 组件
  labelCol?: ColProps;
}

const ZFormItemLabel: React.FC<ZFormItemLabelProps & { required?: boolean; prefixCls: string; }> = ({
  colon,
  htmlFor,
  label,
  labelAlign = 'left',
  labelCol,
  prefixCls,
  required = true,
}) => {
  if (!label) {
    return null
  }

  const mergedLabelCol: ColProps = labelCol || {}

  const mergedLabelAlign: FormLabelAlign | undefined = labelAlign

  const labelClsBasic = `${ prefixCls }-item-label`
  const labelColClassName = mergedLabelAlign === 'left' ? `${ labelClsBasic }-left` : ''

  let labelChildren: React.ReactNode = label

  // Keep label is original where there should have no colon
  const computedColon = colon === true || (colon !== false && colon !== false);
  const haveColon = computedColon

  // Remove duplicated user input colon
  if (haveColon && typeof label === 'string' && (label as string).trim() !== '') {
    labelChildren = (label as string).replace(/[:|：]\s*$/, '')
  }

  // const labelClassName = 'z-form-item-label'
  const labelClassName = classNames({
    [`${ prefixCls }-item-required`]: required,
    [`${ prefixCls }-item-no-colon`]: !computedColon,
  })

  return <Col { ...mergedLabelCol } className={ labelColClassName }>
    <label
      className={ labelClassName }
      htmlFor={ htmlFor }
      title={ typeof label === 'string' ? label : '' }
    >
      { labelChildren }
    </label>
  </Col>
}

export default ZFormItemLabel