import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableButton } from 'components'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from './styles'

import { useAppDispatch, useAppSelector } from 'store'
import { appActions } from 'store/slices/app/actions'

interface HomeViewProps {
	onLayoutRootView?: () => Promise<void>
}

export function Home({ onLayoutRootView }: HomeViewProps) {
	const dispatch = useAppDispatch()
	const currentTheme = useCurrentTheme()
	const globalSafeArea = useAppSelector(state => state.app.globalSafeArea)
	const styles = getStyles(currentTheme)

	const Wrapper = globalSafeArea ? SafeAreaView : View

	return (
		<Wrapper style={styles.root} onLayout={onLayoutRootView}>
			<View style={styles.container}>
				<Text>Hola 👀</Text>
				<TouchableButton
					text='Pusheame uapo 😘'
					onPress={() => {
						dispatch(appActions.set('currentTheme', currentTheme.theme === 'dark' ? 'light' : 'dark'))
					}}
				/>
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</Wrapper>
	)
}