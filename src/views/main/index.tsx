import { SafeAreaView, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableButton } from 'components'
import { useAppSelector } from 'store'

export function Main() {
	const isSafeAreaOn = useAppSelector(state => state.app.globalSafeArea)
	const Wrapper = isSafeAreaOn ? SafeAreaView : View

	return (
		<Wrapper style={styles.container}>
			<Text style={{ paddingBottom: 16 }}> Hola 👀 </Text>
			<TouchableButton
				text='Pusheame 😀'
				onPress={() => {
				}}
			/>
			<StatusBar style="auto" />
		</Wrapper>
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
