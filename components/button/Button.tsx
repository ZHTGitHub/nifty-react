import type { ButtonProps } from 'antd'

import { Button } from 'antd'

export interface ZButtonProps extends ButtonProps {

}

function ZInput(props: ZButtonProps) {
  const { children, ...rest } = props

  return <Button { ...rest }>
    { children }
  </Button>
}

export default ZInput