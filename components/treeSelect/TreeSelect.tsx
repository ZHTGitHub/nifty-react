import type { TreeSelectProps } from 'antd'

import { TreeSelect } from 'antd'
import ZFormItem from '../form/FormItem'

export interface ZTreeSelectProps extends TreeSelectProps {
  label?: string;
}

function ZTreeSelect(props: ZTreeSelectProps) {
  return <div>
    <ZFormItem
      { ...props }
    >
      <TreeSelect 
        style={{ width: '100%' }}
        { ...props } 
      />
    </ZFormItem>
  </div>
}

export default ZTreeSelect