import { useEffect, useState } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleOutlined, FilterOutlined } from '@ant-design/icons'
import { Button, Input, Slider, Space, Table, Tooltip, Typography } from 'antd'
import styled from 'styled-components'

import { Loader } from '../../components'
import { useAuthorised } from '../auth/hooks'

import { useCardPacksQuery } from './api'
const { Text, Title } = Typography

export const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight * 0.53)
  const [showAllPacks, setShowAllPacks] = useState(false)
  const [activeButton, setActiveButton] = useState('All')

  const { data: userData } = useAuthorised()

  const user_id = userData?._id

  const { data, isLoading, isError } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === 'My' ? user_id : undefined,
  })

  const minCount = data?.minCardsCount ?? 0
  const maxCount = data?.maxCardsCount ?? 110

  console.log('data', data)

  const handleResize = () => {
    setCurrentHeight(window.innerHeight * 0.53)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerHeight])

  const handleLearn = (record: any) => {
    console.log('record', record)
  }
  const handleEdit = (record: any) => {
    console.log('record', record)
  }

  const handleDelete = (record: any) => {
    console.log('record', record)
  }

  const handleShowPacks = (event: any) => {
    setShowAllPacks(!showAllPacks)
    const buttonName = event.currentTarget.textContent

    setActiveButton(buttonName)
  }

  const handleFilter = (record: any) => {
    console.log('record', record)
  }

  const handlePageChange = (page: number, pageCount?: number) => {
    setCurrentPage(page)
    if (pageCount) {
      setPageCount(pageCount)
    }
  }

  const onChange = (value: number | [number, number]) => {
    console.log('onChange: ', value)
  }

  const onAfterChange = (value: number | [number, number]) => {
    console.log('onAfterChange: ', value)
  }

  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Cards',
      dataIndex: 'cards',
      sorter: (a: any, b: any) => a.cards - b.cards,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      sorter: (a: any, b: any) => a.lastUpdated - b.lastUpdated,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      sorter: (a: any, b: any) => a.createdBy.localeCompare(b.createdBy),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Tooltip title="Learn">
            <InfoCircleOutlined onClick={() => handleLearn(record)} />
          </Tooltip>
          <Tooltip title="Edit">
            <EditOutlined onClick={() => handleEdit(record)} />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutlined onClick={() => handleDelete(record)} />
          </Tooltip>
        </Space>
      ),
    },
  ]

  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  const formattedData = data?.cardPacks.map((card: any) => ({
    key: card._id,
    name: card.name,
    cards: card.cardsCount,
    lastUpdated: new Date(card.updated).toLocaleDateString('ru-RU'),
    createdBy: card.user_name,
  }))

  return (
    <>
      <PacksContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Title level={2}>Packs list</Title>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500', marginLeft: '10px', width: '200px' }}
            block
          >
            Add new pack
          </Button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div style={{ width: '35%', maxWidth: '500px', marginRight: '10px' }}>
            <StyledCardText>Search</StyledCardText>
            <Input.Search />
          </div>

          <PacksButtonContainer>
            <StyledCardText>Show packs</StyledCardText>
            <Space.Compact block>
              <Button
                type={showAllPacks ? 'primary' : 'default'}
                style={{ width: '100px' }}
                onClick={handleShowPacks}
              >
                My
              </Button>
              <Button
                type={showAllPacks ? 'default' : 'primary'}
                style={{ width: '100px' }}
                onClick={handleShowPacks}
              >
                All
              </Button>
            </Space.Compact>
          </PacksButtonContainer>

          <div style={{ width: '25%', maxWidth: '370px', marginRight: '10px' }}>
            <StyledCardText>Number of cards</StyledCardText>
            <Slider
              max={maxCount}
              range={{ draggableTrack: true }}
              defaultValue={[minCount, maxCount]}
              /* tooltip={{ open: false }}*/
              /*  marks={{ [minCount]: minCount, [maxCount]: maxCount }}*/
              step={1}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
          </div>

          <FilterOutlined onClick={handleFilter} />
        </div>
        <>
          <StyledCardTable
            size={'small'}
            columns={columns}
            dataSource={formattedData}
            pagination={{
              pageSizeOptions: ['10', '20', '50'],
              showQuickJumper: true,
              onChange: handlePageChange,
              total: data?.cardPacksTotalCount || 0,
              current: currentPage,
              pageSize: pageCount,
              showSizeChanger: true,
            }}
            scroll={{ y: currentHeight }}
          />
        </>
      </PacksContainer>
    </>
  )
}

export const PacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  margin: 0;
`

export const PacksButtonContainer = styled.div`
  width: 14%;
  max-width: 200px;
  margin-right: 14px;
`

export const StyledCardText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export const StyledCardTable = styled(Table)`
  margin-bottom: 24px;
`
