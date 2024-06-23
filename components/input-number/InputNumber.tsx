import type { InputNumberProps } from 'antd'

import { InputNumber } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZInputNumberProps extends InputNumberProps {
  label?: string;
}

function ZInputNumber(props: ZInputNumberProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <InputNumber 
        style={{ width: '100%' }}
        { ...props } 
      />
    </ZFormItem>
  </div>
}

export default ZInputNumber