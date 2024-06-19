import type { CheckboxProps } from 'antd'

import { Checkbox } from 'antd'

export interface ZCheckboxProps extends CheckboxProps {
  label?: string;
}

function ZInput(props: ZCheckboxProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }
    
    <Checkbox 
      { ...rest } 
    />
  </div>
}

export default ZInput