import type { TableProps } from 'antd'

import { Table } from 'antd'

import iterateTree from './utils/iterateTree'

export interface ZTableProps {
  data?: any[];
  keyName?: string | number;
}

function ZTable(props: TableProps & ZTableProps) {
  const { data, keyName = 'id', ...rest } = props

  return <Table 
    { ...rest }
    dataSource={ iterateTree(data) }
    pagination={ false }
    ></Table>
}

export default ZTable