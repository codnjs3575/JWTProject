import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native'
import AuthContent from '../component/Auth/AuthContent'
import { useContext, useState } from 'react'
import { AuthContext } from '../store/auth-context'
import LoadingOverlay from '../component/ui/LoadingOverlay'
import { createUser } from '../util/auth'

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert('인증 실패...', '다시 시도해주세요.')
      setIsAuthenticating(flase)
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="사용자 생성 중..." />
  }
  return <AuthContent onAuthenticate={signupHandler} />
}
