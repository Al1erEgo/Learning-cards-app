import { MAIN_PATH } from '../../../../../constants'
import {
  useAuthMeLogOutMutation,
  useAuthMeUpdateMutation,
  useLoginMutation,
  useRegisterMutation,
  useRequestPasswordResetMutation,
  useSetNewPasswordMutation,
} from '../../../api'
import { ABSOLUTE_AUTH_PATH } from '../../../constants'

//TODO убрать any
type MutationAndPathByFormType = {
  [key: string]: { mutation: any; path?: string }
}

export const mutationAndPathByForm: MutationAndPathByFormType = {
  login: {
    mutation: useLoginMutation,
    path: MAIN_PATH.Root,
  },
  logout: {
    mutation: useAuthMeLogOutMutation,
    path: ABSOLUTE_AUTH_PATH.SignIn,
  },
  signup: {
    mutation: useRegisterMutation,
  },
  resetPassword: {
    mutation: useRequestPasswordResetMutation,
  },
  newPassword: {
    mutation: useSetNewPasswordMutation,
  },
  updateUserName: {
    mutation: useAuthMeUpdateMutation,
  },
} as const
