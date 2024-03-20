import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../store/auth-context'
import axios from 'axios'

export default function HomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('')

  const authCtx = useContext(AuthContext)
  const token = authCtx.token

  useEffect(() => {
    axios
      .get(
        'https://react-native-project-d229d-default-rtdb.firebaseio.com/message.json?auth=' +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data)
      })
  }, [token])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>JWTProject</Text>
      <Text>사용자 인증이 성공되었습니다!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})
