import React, { FC } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { useDebouncedSearchWithReset } from '../../hooks'
import { HandleSearchType } from '../../modules/pack/types'
import { StyledCardsText } from '../../styles'

import { CardsSearchWrapperProps, Style } from './style'

type CardsSearchProps = CardsSearchWrapperProps & {
  searchValue: string
  onSearch: HandleSearchType
  placeholder: string
  isLoading: boolean
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  onSearch,
  searchValue,
  placeholder,
  isLoading,
}) => {
  const { handleOnSearchChange, localSearchValue } = useDebouncedSearchWithReset(
    searchValue,
    onSearch
  )

  return (
    <Style size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder={placeholder}
        enterButton={<SearchOutlined />}
        value={localSearchValue}
        onChange={handleOnSearchChange}
        onSearch={onSearch}
        allowClear={true}
        maxLength={50}
        disabled={isLoading}
      />
    </Style>
  )
}
