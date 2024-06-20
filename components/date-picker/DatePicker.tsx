import type { DatePickerProps } from 'antd'

import { DatePicker } from 'antd'

export interface ZDatePickerProps extends DatePickerProps {
  label?: string;
}

function ZInput(props: ZDatePickerProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }

    <DatePicker 
      { ...rest } 
      style={{
        width: '100%'
      }}
    />
  </div>
}

export default ZInput