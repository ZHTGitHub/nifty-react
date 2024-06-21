import type { Column } from './types'

import { Table } from 'antd'
import dayjs from 'dayjs'
import classNames from 'classnames'

import iterateTree from './_util/iterateTree'
import { formatCurrencyManual } from './_util/formatCurrencyManual'

import styles from './style/Table.module.css'

export interface ZTableProps {
  bordered?: boolean;
  columns?: Column[];
  data?: object[];
  emptyText?: string;
  keyName?: string;
  size?: 'large' | 'middle' | 'small';
}

function ZTable(props: ZTableProps) {
  const { 
    bordered = false, 
    columns, 
    data = [], 
    emptyText = '-',
    keyName = 'id', 
    size = 'large',
  } = props

  return (
    <Table 
      bordered={ bordered }
      dataSource={ iterateTree(data, keyName) } 
      size={ size } 
      pagination={ false }
    >
      {
        columns?.map((column: Column) => {
          const { 
            align = 'left', 
            className, 
            empty,
            ellipsis = false, 
            format = 'YYYY/MM/DD HH:mm:ss',
            html = false, 
            key, 
            prefix, 
            style, 
            suffix, 
            title, 
            type,
            visible = true, 
            width,
            onCell,
            onHeaderCell,
          } = column

          if(visible === false) {
            return null
          }

          return <Table.Column 
            align={ align }
            className={ className }
            ellipsis={ ellipsis }
            dataIndex={ key }
            key={ key }
            title={ title }
            width={ width }
            render={ (text, record, index) => {
              console.log({ text, row: record, rowIndex: index })

              // Empty
              if(!text) {
                return empty || emptyText
              }

              // HTML
              if(html) {
                return <div dangerouslySetInnerHTML={{ __html: text }}></div>
              }

              let textChildren: React.ReactNode = text

              // Currency
              if(type === 'currency' && typeof textChildren === 'number') {
                textChildren = formatCurrencyManual(textChildren)
              }

              // Date
              if(type === 'date' && typeof textChildren === 'string') {
                textChildren = dayjs(textChildren).format(format)
              }

              // Prefix
              if(prefix && typeof textChildren === 'string' && (textChildren as string).trim() !== '') {
                textChildren = `${ prefix }${ textChildren }`
              }

              // Suffix
              if(suffix && typeof textChildren === 'string' && (textChildren as string).trim() !== '') {
                textChildren = `${ textChildren }${ suffix }`
              }

              // Style
              if(style && style !== null && Object.prototype.toString.call(style) === '[object Object]') {
                textChildren = <div 
                  className={ classNames({ [styles.ellipsis]: ellipsis }) } 
                  style={ style }
                >{ textChildren }</div>
              }

              return textChildren
            } }
            onCell={ 
              (row, rowIndex) => {
                // onCell
                if(onCell && Object.prototype.toString.call(onCell) === '[object Function]') {
                  return onCell(row, rowIndex)
                }
              }
            }
            onHeaderCell={
              (column) => {
                // onCell
                if(onHeaderCell && Object.prototype.toString.call(onHeaderCell) === '[object Function]') {
                  return onHeaderCell(column)
                }
              }
            }
          />
        })
      }
    </Table>
  )
}

export default ZTable
