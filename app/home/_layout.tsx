import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useCurrentTheme } from 'hooks'
import { TabsView } from 'views/home/layout'
import { styles as getStyles } from 'views/home/layout/styles'

export default function HomeLayout() {
	const currentTheme = useCurrentTheme()
	const styles = getStyles(currentTheme)

	return (
		<SafeAreaView
			style={styles.root}
			edges={['top', 'left', 'right']}
		>
			<View style={styles.container}>
				<TabsView />
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</SafeAreaView>
	)
}