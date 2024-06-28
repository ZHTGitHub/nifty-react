import type { SwitchProps } from 'antd'

import { Switch } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZSwitchProps extends SwitchProps {
  label?: string;
}

function ZSwitch(props: ZSwitchProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <Switch 
        { ...props } 
      />
    </ZFormItem>
  </div>
}

export default ZSwitch