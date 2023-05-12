import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsConditionProvider } from '../../../../components'
import { useTableResize } from '../../../../hooks'
import { TableDataType } from '../../../../types'

type PackTableType = {
  data: TableDataType
}

export const PackTable: FC<PackTableType> = ({ data }) => {
  const {
    formattedTableData,
    tableColumns,
    tableParams,
    elementsCount,
    handleTableChange,
    isDataLoading,
    serverError,
  } = data

  const tableHeight = useTableResize()

  return (
    <CardsConditionProvider error={serverError} type="table">
      <Table
        loading={isDataLoading}
        size={'small'}
        columns={tableColumns}
        dataSource={formattedTableData}
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
