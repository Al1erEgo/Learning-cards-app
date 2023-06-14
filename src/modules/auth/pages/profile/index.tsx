import { LogoutOutlined } from '@ant-design/icons'
import { redirect } from 'react-router-dom'

import { BackToCardsButton } from '../../../cards/components'
import { EditableProfileName, ProfileAvatar } from '../../components'
import { useAuthorised } from '../../hooks'
import { StyledCard } from '../../styles'

import { StyledProfileContainer, StyledProfileLogOutButton, StyledProfileText } from './styles'

import { MAIN_PATH } from '@/constants'
import { useAuthMeLogOutMutation } from '@/modules/auth/api'
import { AUTH_PATH } from '@/modules/auth/constants'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName, avatar, email } = userData ?? {}

  const [trigger, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()

  const handleLogout = async () => {
    await trigger().unwrap()
    redirect(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  return (
    <>
      <BackToCardsButton />
      <StyledCard title={'Personal information'}>
        <StyledProfileContainer>
          <ProfileAvatar avatar={avatar} />
          <EditableProfileName userName={userName} />

          <StyledProfileText>{email}</StyledProfileText>

          <StyledProfileLogOutButton onClick={handleLogout} loading={isLoggingOut} icon={<LogoutOutlined />}>
            Log out
          </StyledProfileLogOutButton>
        </StyledProfileContainer>
      </StyledCard>
    </>
  )
}
