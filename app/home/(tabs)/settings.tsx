import { Text } from "components"
import { View } from "react-native"
import { ScrollView, Switch } from "react-native-gesture-handler"
import { SettingsSection, SettingOption } from "views/home/settings"
import { styles } from "views/home/settings/styles"

import { useAppDispatch, useAppSelector } from "store"
import { appActions } from "store/slices/app/actions"

export default function SettingsPage() {
	const dispatch = useAppDispatch()

	const currentTheme = useAppSelector(state => state.app.currentTheme)

	return (
		<View style={{ flex: 1 }}>

			<Text style={styles.titleText}>
				Configuración
			</Text>

			<ScrollView style={{ flex: 1, overflow: 'visible' }}>

				<SettingsSection title="GENERAL">

					<SettingOption
						title="Tema oscuro"
						viewProps={{ style: styles.settingOption }}
					>
						<Switch
							trackColor={{ true: '#8A2BE2' }}
							value={currentTheme === 'dark'}
							onValueChange={e => {
								dispatch(appActions.set('currentTheme', e ? 'dark' : 'light'))
							}}
						/>
					</SettingOption>

				</SettingsSection>

			</ScrollView>

		</View>
	)
}