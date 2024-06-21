import type { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './style/PagerHeader.module.css'

export interface ZPageHeaderProps {
  className?: string;
  style?: CSSProperties;
  title?: string | ReactNode;
  toolbar?: ReactNode;
}

function ZPageHeader(props: ZPageHeaderProps) {
  const { className, style, title, toolbar } = props

  const pageheaderClassName = classNames(className, 
    styles['z-paperheader'],
  )

  return <div 
    className={ pageheaderClassName }
    style={ style }
  >
    <span className={ styles['title'] }>{ title }</span>

    <div className={ styles['toolbar'] }>{ toolbar }</div>
  </div>
}

export default ZPageHeader