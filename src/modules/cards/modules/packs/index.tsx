import React from 'react'

import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'
import { usePacksData } from './components/packs-table/hooks/use-packs-data'

export const Packs = () => {
  const [
    { actionsHandlers },
    { handlePacksSearch },
    packsTableData,
    { handleAddNewPack },
    { handleSliderChange },
    { handleToggleButton },
    { clearFilters },
  ] = usePacksData()

  const { isPacksDataLoading, packsTableParams, data } = packsTableData

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isPacksDataLoading} onClick={handleAddNewPack}>
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <StyledCardsToolbar>
        <CardsSearch
          searchValue={packsTableParams.searchValue}
          onSearch={handlePacksSearch}
          placeholder={'Enter pack name'}
        />
        <PacksButton
          activeButton={packsTableParams.activeButton}
          handleToggleButton={handleToggleButton}
        />
        <PacksSlider
          state={packsTableParams}
          handleSliderChange={handleSliderChange}
          minCardsCount={data?.minCardsCount}
          maxCardsCount={data?.maxCardsCount}
        />
        <PacksFilter clearFilters={clearFilters} />
      </StyledCardsToolbar>

      <PacksTable packsTableData={packsTableData} />
    </>
  )
}
