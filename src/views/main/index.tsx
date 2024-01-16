import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableButton } from 'components'
import { useAppDispatch, useAppSelector } from 'store'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from './styles'
import { appActions } from 'store/slices/app/actions'

export function Main() {
	const dispatch = useAppDispatch()
	const currentTheme = useCurrentTheme()
	const globalSafeArea = useAppSelector(state => state.app.globalSafeArea)
	const styles = getStyles(currentTheme)

	const Wrapper = globalSafeArea ? SafeAreaView : View

	return (
		<Wrapper style={styles.root}>
			<View style={styles.container}>
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