import type { SwitchProps } from 'antd'

import { Switch } from 'antd'

export interface ZSwitchProps extends SwitchProps {
  label?: string;
}

function ZSwitch(props: ZSwitchProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }
    <Switch 
      { ...rest } 
    />
  </div>
}

export default ZSwitch