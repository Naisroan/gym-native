import { SafeAreaView, View } from 'react-native'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from './styles'

import { useAppSelector } from 'store'

export default function HomeLayout() {
	const currentTheme = useCurrentTheme()
	const globalSafeArea = useAppSelector(state => state.app.globalSafeArea)
	const styles = getStyles(currentTheme)

	const Wrapper = globalSafeArea ? SafeAreaView : View

	return (
		<Wrapper style={styles.root}>
			<View style={styles.container}>
				<Slot />
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</Wrapper>
	)
}