import React, { FC } from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
import { useLocation } from 'react-router-dom'

import { useNavigateToOnclick } from '../../../../hooks'
import { useAuthMeUpdateMutation } from '../../api'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { useAuthorised, useAuthMutation } from '../../hooks'

import {
  StyledAuthWidgetButton,
  StyledUserDataWrapper,
  StyledUserName,
  StyledUserIconWidget,
} from './styles'

export const AuthWidget: FC = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [handleLogOut] = useAuthMutation('logout')
  const profileRedirect = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.Profile)
  const signInRedirect = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.SignIn)
  const signUpRedirect = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.SignUp)

  const location = useLocation()

  const [trigger, { isLoading }] = useAuthMeUpdateMutation({ fixedCacheKey: 'avatar' })

  const unauthorisedButtonProps =
    location.pathname === '/auth/sign-up'
      ? { children: 'Sign in', onClick: signInRedirect }
      : { children: 'Sign up', onClick: signUpRedirect }

  if (!isAuthorised) {
    return <StyledAuthWidgetButton type={'primary'} {...unauthorisedButtonProps} />
  }

  return (
    <>
      <StyledUserDataWrapper onClick={profileRedirect}>
        <StyledUserName>{userData.name}</StyledUserName>
        {isLoading ? (
          <Skeleton.Avatar active size={23} style={{ marginRight: '7px' }} />
        ) : (
          <StyledUserIconWidget src={userData.avatar} alt="avatar" />
        )}
      </StyledUserDataWrapper>
      <StyledAuthWidgetButton icon={<LogoutOutlined />} onClick={handleLogOut}>
        Log out
      </StyledAuthWidgetButton>
    </>
  )
}
