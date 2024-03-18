import { useContext, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import AuthContent from '../component/Auth/AuthContent'
import { AuthContext } from '../store/auth-context'
import LoadingOverlay from '../component/ui/LoadingOverlay'
import { loginUser } from '../util/auth'

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true)
    try {
      const token = await loginUser(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert('인증 실패...', '다시 시도해주세요.')
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="로그인하는 중.." />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373a5b',
  },
  // 1. 제목
  login_container: {
    // backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'flex-end',
  },
  login_text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffffee',
  },

  // 2. 입력창
  form_container: {
    flex: 1.5,
    // backgroundColor: '#dfdf55ab',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forms: {
    backgroundColor: '#ffffff86',
    marginBottom: 10,
    width: '85%',
    // height: '25%',
    height: 70,
    borderRadius: 6,
  },
  inputID: { flex: 1, fontSize: 18, paddingLeft: 10, fontWeight: '500' },
  inputPW: { flex: 1, fontSize: 18, paddingLeft: 10, fontWeight: '500' },
  // 3. 확인 버튼
  button_container: {
    flex: 2,
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  button_confirm: {
    // flex: 1,
    backgroundColor: '#212336ff',
    width: '85%',
    height: 70,
    borderRadius: 6,
    justifyContent: 'center',
  },
  confirm_text: {
    color: '#ffffffee',
    textAlign: 'center',
    fontSize: 22,
  },
  signup_text: {
    marginTop: 30,
    color: '#d7d7d7ff',
  },
  signup_text_link: {
    fontSize: 18,
    marginTop: 15,
  },
})
