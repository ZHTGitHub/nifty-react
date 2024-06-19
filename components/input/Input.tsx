import type { InputProps } from 'antd'

import { Input } from 'antd'
import ZFormItemLabel from '../form/FormItemLabel'

export interface ZInputProps extends InputProps {
  label?: string;
}

function ZInput(props: ZInputProps) {
  const { label, ...rest } = props

  return <div>
    <ZFormItemLabel 
      label={ label }
      prefixCls='z-input'
    />

    <Input 
      { ...rest } 
    />
  </div>
}

export default ZInput