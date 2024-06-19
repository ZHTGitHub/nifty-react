import type { RadioProps } from 'antd'

import { Radio } from 'antd'

export interface ZRadioProps extends RadioProps {
  label?: string;
}

function ZInput(props: ZRadioProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }

    <Radio 
      { ...rest } 
    />
  </div>
}

export default ZInput