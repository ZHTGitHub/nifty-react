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
    />
  </div>
}

export default ZInput