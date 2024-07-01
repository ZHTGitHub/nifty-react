import type { RadioProps } from 'antd'

import { Radio } from 'antd'

export interface ZRadioProps extends RadioProps {
  label?: string;
}

function ZRadio(props: ZRadioProps) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }

    <Radio 
      { ...rest } 
    />
  </div>
}

export default ZRadio