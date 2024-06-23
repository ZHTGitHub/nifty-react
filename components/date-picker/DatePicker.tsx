import type { DatePickerProps } from 'antd'

import { DatePicker } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZDatePickerProps extends DatePickerProps {
  label?: string;
}

function ZInput(props: ZDatePickerProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <DatePicker 
        style={{ width: '100%' }}
        { ...props } 
      />
    </ZFormItem>
  </div>
}

export default ZInput