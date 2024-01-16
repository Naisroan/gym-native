import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'components'
import { useAppSelector } from 'store'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from './styles'

export function Main() {
	const currentTheme = useCurrentTheme()
	const globalSafeArea = useAppSelector(state => state.app.globalSafeArea)

	const styles = getStyles(currentTheme)
	const Wrapper = globalSafeArea ? SafeAreaView : View

	return (
		<Wrapper style={styles.root}>
			<View style={styles.container}>
				<Text>asda</Text>
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</Wrapper>
	)
}