import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from './styles'

import { useAppSelector } from 'store'

interface HomeViewProps {
	onLayoutRootView?: () => Promise<void>
}

export function Home({ onLayoutRootView }: HomeViewProps) {
	const currentTheme = useCurrentTheme()
	const globalSafeArea = useAppSelector(state => state.app.globalSafeArea)
	const styles = getStyles(currentTheme)

	const Wrapper = globalSafeArea ? SafeAreaView : View

	return (
		<Wrapper style={styles.root} onLayout={onLayoutRootView}>
			<View style={styles.container}>
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</Wrapper>
	)
}