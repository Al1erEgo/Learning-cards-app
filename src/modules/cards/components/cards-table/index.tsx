import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsConditionProvider } from '@/modules/cards/components'
import { useTableResize } from '@/modules/cards/hooks'

//TODO fix any
type CardsTableType = {
  tableData: any
}

export const CardsTable: FC<CardsTableType> = ({ tableData }) => {
  const {
    formattedTableData,
    tableColumns,
    tableParams,
    elementsCount,
    handleTableChange,
    isDataLoading,
    serverError,
  } = tableData

  const tableHeight = useTableResize()

  return (
    <CardsConditionProvider error={serverError} type="table">
      <Table
        size={'small'}
        columns={tableColumns}
        dataSource={formattedTableData}
        loading={isDataLoading}
        onChange={handleTableChange}
        pagination={{
          ...tableParams.pagination,
          pageSizeOptions: ['10', '20', '50'],
          showQuickJumper: true,
          showSizeChanger: true,
          total: elementsCount,
        }}
        scroll={{ scrollToFirstRowOnChange: true, y: tableHeight }}
      />
    </CardsConditionProvider>
  )
}
