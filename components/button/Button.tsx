import type { ReactNode } from 'react'
import type { ButtonProps } from 'antd'

import { Button } from 'antd'

export interface ZButtonProps extends ButtonProps {
  children?: ReactNode;
}

function ZInput(props: ZButtonProps) {
  const { children, ...rest } = props

  return <Button { ...rest }>
    { children }
  </Button>
}

export default ZInput