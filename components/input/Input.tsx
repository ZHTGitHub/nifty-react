import type { InputProps } from 'antd'

import { Input } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZInputProps extends InputProps {
  label?: string;
}

function ZInput(props: ZInputProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <Input 
        { ...props } 
      />
    </ZFormItem>
  </div>
}

export default ZInput