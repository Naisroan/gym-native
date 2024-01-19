import { View } from "react-native"
import { Text } from "components"
import { getStyles } from "./styles"
import { useCurrentTheme } from "hooks"

interface SettingsSectionProps {
	title: string
	children?: React.ReactNode
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
	const currentTheme = useCurrentTheme()
	const styles = getStyles(currentTheme)

	return (
		<View style={styles.root}>
			<Text style={styles.titleText}> {title} </Text>
			<View>
				{children}
			</View>
		</View>
	)
}