import { Pressable, StyleSheet, Text, View } from 'react-native'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>JWTProject</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  pressed: {
    opacity: 0.3,
  },
})
