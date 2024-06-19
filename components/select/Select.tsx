import type { SelectProps } from 'antd'

import { Select } from 'antd'

export interface ZSelectProps extends SelectProps {
  label?: string;
}

function ZSelect(props: ZSelectProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }
    
    <Select 
      style={{ width: '100%' }}
      allowClear={ true }
      { ...rest } 
    />
  </div>
}

export default ZSelect