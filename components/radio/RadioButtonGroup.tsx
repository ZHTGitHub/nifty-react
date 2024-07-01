import type { RadioProps } from 'antd'

import { Radio } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZRadioButtonGroupProps extends RadioProps {
  label?: string;
}

function ZRadioButtonGroup(props: ZRadioButtonGroupProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <Radio.Group
        { ...props } 
        optionType="button"
      />
    </ZFormItem>
  </div>
}

export default ZRadioButtonGroup