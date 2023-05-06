import React, { FC } from 'react'

import { Button } from 'antd'

import { useModalContext } from '../../../../providers/use-modal'

import { StyledOkButton } from './styles'

type DeleteModalProps = {
  onOk: () => void
  packName?: string
}

export const DeleteModal: FC<DeleteModalProps> = ({ onOk, packName }) => {
  const { hideModal } = useModalContext()
  const handleOk = () => {
    onOk()
    hideModal()
  }
  const handleCancel = () => {
    hideModal()
  }

  return (
    <>
      <p>
        Are you sure you want to delete the pack <strong>{packName}</strong>?
      </p>

      <div style={{ marginTop: '16px', textAlign: 'right' }}>
        <Button onClick={handleCancel}>Cancel</Button>
        <StyledOkButton onClick={handleOk}>Delete</StyledOkButton>
      </div>
    </>
  )
}
