import { View, ViewProps } from "react-native"
import { Text } from "components"
import { useCurrentTheme } from "hooks"
import { getStyles } from "./styles"

interface SettingOptionProps {
	title: string
	children: React.ReactNode
	viewProps?: ViewProps
}

export function SettingOption({ title, children, viewProps }: SettingOptionProps) {
	const currentTheme = useCurrentTheme()
	const styles = getStyles(currentTheme)

	return (
		<View {...viewProps} style={[styles.root, viewProps?.style]}>
			<View style={styles.container}>
				<View style={styles.box}>
					<Text style={styles.titleText}>{title}</Text>
				</View>
				<View style={[styles.box, styles.optionBox]}>
					{children}
				</View>
			</View>
		</View>
	)
}