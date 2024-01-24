import { View } from "react-native"
import { Tabs, usePathname } from "expo-router"
import { TouchableButton } from "components"
import { useCurrentTheme } from "hooks"

import Ionicons from '@expo/vector-icons/Ionicons'

export default function HomeLayout() {
	const theme = useCurrentTheme()
	const pathname = usePathname()

	return (
		<Tabs
			sceneContainerStyle={{
				padding: 24,
				paddingBottom: 0,
				backgroundColor: theme.palette.BG_COLOR
			}}
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 90,
					backgroundColor: theme.palette.BG_COLOR,
					borderTopWidth: 1,
					borderTopColor: theme.palette.PRIMARY_COLOR
				},
				tabBarItemStyle: {
					paddingTop: 12
				},
				tabBarActiveTintColor: theme.palette.PRIMARY_COLOR,
				tabBarInactiveTintColor: theme.palette.TEXT_COLOR,
			}}
		>

			<Tabs.Screen
				name="(tabs)/practices/index"
				options={{
					tabBarLabel: 'Ejercicios',
					tabBarIcon: props => (
						<Ionicons
							name={pathname === '/home/practices' ? 'body' : 'body-outline'}
							size={24}
							color={props.focused ? theme.palette.PRIMARY_COLOR : theme.palette.TEXT_COLOR}
						/>
					)
				}}
			/>

			<Tabs.Screen
				name="index"
				options={{
					tabBarButton: props => {
						const { onPress } = props
						return (
							<View style={{ flex: 1, alignItems: 'center' }}>
								<TouchableButton
									implementation='highlight'
									variant='contained'
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
										name={'md-home'}
										size={40}
										color={theme.palette.PRIMARY_INVERT_COLOR}
									/>
								</TouchableButton>
							</View>
						)
					}
				}}
			/>

			<Tabs.Screen
				name="(tabs)/settings/index"
				options={{
					tabBarLabel: 'Configuración',
					tabBarIcon: props => (
						<Ionicons
							name={pathname === '/home/settings' ? 'settings' : 'settings-outline'}
							size={24}
							color={props.focused
								? theme.palette.PRIMARY_COLOR
								: theme.palette.TEXT_COLOR}
						/>
					)
				}}
			/>

		</Tabs>
	)
}