import type { ColProps } from 'antd'
import type { FormLabelAlign } from './interface'

import { Col } from 'antd'

export interface ZFormItemLabelProps {
  colon?: boolean;
  htmlFor?: string;
  label?: React.ReactNode;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
}

const ZFormItemLabel: React.FC<ZFormItemLabelProps & { required?: boolean; prefixCls: string; }> = ({
  colon,
  htmlFor,
  label,
  labelAlign = 'start',
  labelCol,
  prefixCls,
  required = false,
}) => {
  if (!label) {
    return null
  }

  const mergedLabelCol: ColProps = labelCol || {}

  const mergedLabelAlign: FormLabelAlign | undefined = labelAlign

  const labelClsBasic = `${ prefixCls }-item-label`
  const labelColClassName = mergedLabelAlign === 'left' ? `${ labelClsBasic }-left` : ''

  let labelChildren: React.ReactNode = label

  // Remove duplicated user input colon
  if (colon && typeof label === 'string' && (label as string).trim() !== '') {
    labelChildren = (label as string).replace(/[:|：]\s*$/, '')
  }

  const labelClassName = 'z-form-item-label'

  return <Col { ...mergedLabelCol } className={ labelColClassName }>
    <label
      htmlFor={ htmlFor }
      className={ labelClassName }
    >
      { labelChildren }
    </label>
  </Col>
}

export default ZFormItemLabel