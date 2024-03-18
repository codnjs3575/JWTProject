import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useState } from 'react'

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,

  // 회원가입 및 로그인에 성공할 때 트리거되는 메서드
  authenticate: (token) => {},

  // 토큰 삭제 메서드
  logout: () => {},
})

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState()

  function authenticate(token) {
    setAuthToken(token)
    AsyncStorage.setItem('token', token)
  }
  function logout() {
    setAuthToken(null)
    AsyncStorage.removeItem('token')
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
