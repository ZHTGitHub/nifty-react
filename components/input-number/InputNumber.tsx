import type { InputNumberProps } from 'antd'

import { InputNumber } from 'antd'

export interface ZInputNumberProps extends InputNumberProps {
  label?: string;
}

function ZInputNumber(props: ZInputNumberProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }

    <InputNumber 
      style={{ width: '100%' }}
      { ...rest } 
    />
  </div>
}

export default ZInputNumber