import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'

export default function LoginScreen() {
  const navigation = useNavigation()

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      {/* 1. 제목 */}
      <View style={styles.login_container}>
        <Text style={styles.login_text}>로 그 인</Text>
      </View>

      {/* 2. 입력창 */}
      <View style={styles.form_container}>
        {/* 2-1. 아이디 입력창 */}
        <View style={styles.forms}>
          <TextInput
            value={Email}
            onChangeText={setEmail}
            style={styles.inputID}
          />
        </View>

        {/* 2-2. 비밀번호 입력창 */}
        <View style={styles.forms}>
          <TextInput
            secureTextEntry={true}
            value={Password}
            onChangeText={setPassword}
            style={styles.inputPW}
          />
        </View>
      </View>

      {/* 3. 확인 버튼 */}
      <View style={styles.button_container}>
        <Pressable
          style={styles.button_confirm}
          onPress={() => {
            // console.log('email: ' + Email)
            // console.log('pw: ' + Password)
            setEmail('')
            setPassword('')
          }}
        >
          <Text style={styles.confirm_text}>확 인</Text>
        </Pressable>

        {/* 회원가입 버튼 */}
        <Text style={styles.signup_text}>아직 회원이 아니신가요?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Signup')
          }}
        >
          <Text style={[styles.signup_text, styles.signup_text_link]}>
            회원가입
          </Text>
        </Pressable>
      </View>
    </View>
  )
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
