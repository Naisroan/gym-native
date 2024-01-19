import { View } from 'react-native'
import { Tabs, router, usePathname } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableButton } from 'components'
import { useCurrentTheme } from 'hooks'
import { styles as getStyles } from './styles'

export default function HomeLayout() {
	const currentTheme = useCurrentTheme()
	const pathname = usePathname()
	const styles = getStyles(currentTheme)

	const isHome = pathname === '/home/home'

	return (
		<SafeAreaView
			style={styles.root}
			edges={['top', 'left', 'right']}
		>
			<View style={styles.container}>
				<Tabs
					screenOptions={{
						headerShown: false,
						tabBarStyle: {
							height: 90,
							borderTopColor: currentTheme.palette.PRIMARY_COLOR,
							borderTopWidth: 1
						},
						tabBarItemStyle: {
							paddingTop: 12
						},
						tabBarLabelStyle: {
						},
						tabBarActiveTintColor: currentTheme.palette.PRIMARY_COLOR,
						tabBarInactiveTintColor: currentTheme.palette.TEXT_COLOR,
					}}
				>

					<Tabs.Screen
						name="(tabs)/account"
						options={{
							tabBarLabel: 'Cuenta',
							tabBarIcon: props => (
								<Ionicons
									name='md-person'
									size={24}
									color={props.focused ? currentTheme.palette.PRIMARY_COLOR : currentTheme.palette.TEXT_COLOR}
								/>
							)
						}}
					/>

					<Tabs.Screen
						name="(tabs)/home"
						options={{
							tabBarButton: props => {
								const { onPress } = props
								return (
									<View style={{ flex: 1, alignItems: 'center' }}>
										<TouchableButton
											variant={isHome ? 'outlined' : 'contained'}
											style={{
												alignItems: 'center',
												borderRadius: 100,
												elevation: 4,
												height: 80,
												justifyContent: 'center',
												marginTop: -34,
												shadowColor: 'rgba(0, 0, 0, 0.4)',
												shadowOffset: { height: 0, width: 0 },
												shadowOpacity: 1,
												shadowRadius: 3,
												width: 80,
											}}
											onPress={onPress}
										>
											<Ionicons
												name='settings'
												size={40}
												color={isHome ? currentTheme.palette.PRIMARY_COLOR : 'white'}
											/>
										</TouchableButton>
									</View>
								)
							}
						}}
					/>

					<Tabs.Screen
						name="(tabs)/settings"
						options={{
							tabBarLabel: 'Configuración',
							tabBarIcon: props => (
								<Ionicons
									name='md-settings'
									size={24}
									color={props.focused ? currentTheme.palette.PRIMARY_COLOR : currentTheme.palette.TEXT_COLOR}
								/>
							)
						}}
					/>

				</Tabs>
			</View>
			<StatusBar style={currentTheme.theme === 'light' ? 'dark' : 'light'} />
		</SafeAreaView>
	)
}