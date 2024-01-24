import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from 'views/main/styles'
import { Stack } from 'expo-router'

export default function MainLayout() {
	const currentTheme = useCurrentTheme()
	const styles = getStyles(currentTheme)

	return (
		<SafeAreaView
			style={styles.root}
			edges={['top', 'left', 'right']}
		>
			<View style={styles.container}>
				<Stack
					screenOptions={{
						contentStyle: styles.screenContent
					}}
				>

					<Stack.Screen
						name="home"
						options={{
							headerShown: false
						}}
					/>

					<Stack.Screen
						name="practices/form"
						options={{
							headerShown: false,
							presentation: 'modal',
							contentStyle: {
								padding: 24,
								backgroundColor: currentTheme.palette.BG_COLOR
							}
						}}
					/>

				</Stack>
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</SafeAreaView>
	)
}