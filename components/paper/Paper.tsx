import type { CSSProperties, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './style/Paper.module.css'

export interface ZPaperProps {
  className?: string;
  children?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  style?: CSSProperties;
}

function ZPaper(props: ZPaperProps) {
  const { className, children, footer, header, style } = props

  const paperClassName = classNames(className, styles['z-paper'])

  return <div 
    className={ paperClassName }
    style={ style }
  >
    { header }

    <div>
      { children }
    </div>

    { footer }
  </div>
}

export default ZPaper