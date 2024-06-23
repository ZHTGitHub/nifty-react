import type { SelectProps } from 'antd'

import { Select } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZSelectProps extends SelectProps {
  label?: string;
}

function ZSelect(props: ZSelectProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <Select 
        style={{ width: '100%' }}
        { ...props } 
      />
    </ZFormItem>
  </div>
}

export default ZSelect