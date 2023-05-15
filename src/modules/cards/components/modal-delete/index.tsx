import React, { FC } from 'react'

import { DeleteCardRequestType } from '../../api'
import { StyledModalWrapper } from '../../styles'
import { PackModalBaseType } from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'

type ModalDeleteType = PackModalBaseType<DeleteCardRequestType>
export const ModalDelete: FC<ModalDeleteType> = ({
  payload,
  onSubmit,
  onCancel,
}) => {
  const handleDelete = () => {
    onSubmit(payload)
    onCancel()
  }

  return (
    <StyledModalWrapper>
      <p>Are you sure you want to delete the card?</p>

      <ModalButtons
        submitButtonName={'Delete'}
        onSubmit={handleDelete}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
