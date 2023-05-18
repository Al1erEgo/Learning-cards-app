import { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../constants'
import { ABSOLUTE_CARD_PATH } from '../constants'
import {
  ButtonsHandlersType,
  HandleSearchType,
  HandleTableChangeType,
  PackMutationsObjType,
  PackTableParamsType,
} from '../types'
import { PackModalsHandlersType } from '../types/pack-modals'

import { useCardsModals } from './use-cards-modals'

type UsePackHandlersType = (
  setTableParams: Dispatch<SetStateAction<PackTableParamsType>>,
  mutations: PackMutationsObjType,
  packId: string,
  packName: string
) => {
  handleTableChange: HandleTableChangeType
  handleSearch: HandleSearchType
  buttonsHandlers: ButtonsHandlersType
  modalHandlers: PackModalsHandlersType
}

export const usePackHandlers: UsePackHandlersType = (
  setTableParams,
  mutations,
  packId,
  packName
) => {
  const navigate = useNavigate()
  const { addCard, updateCard, updatePack, deletePack } = mutations
  const modalHandlers = useCardsModals(mutations)

  const handleSearch: HandleSearchType = searchValue =>
    setTableParams(prevState => ({ ...prevState, searchValue }))

  const handleTableChange: HandleTableChangeType = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleAddCard = () =>
    modalHandlers.addCardModal({ card: { cardsPack_id: packId || '' } })

  const handleDeletePack = async () => {
    await deletePack.handler({ id: packId })
    navigate(MAIN_PATH.Cards) //можно перенести в хук useHandleAction
  }

  const handleEditPack = () =>
    updatePack.handler({ cardsPack: { _id: packId } })

  const handleLearnPack = () =>
    navigate(`${ABSOLUTE_CARD_PATH.Learn}/${packId}?name=${packName}`)

  const buttonsHandlers = {
    handleAddCard,
    handleEditPack,
    handleDeletePack,
    handleLearnPack,
  }

  return { handleTableChange, handleSearch, buttonsHandlers, modalHandlers }
}
