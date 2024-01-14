import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableButton } from 'components'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 16 }}> Hola 👀 </Text>
      <TouchableButton
        text='Pusheame 😀'
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
