import { CurrentTheme } from "hooks"
import { Platform, StyleSheet } from "react-native"
import { theme } from "themes"

export const styles = (currentTheme: CurrentTheme) => StyleSheet.create({
	root: {
		backgroundColor: currentTheme.palette.BG_COLOR,
		flex: 1
	},
	container: {
		backgroundColor: 'transparent',
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 40 : 0,
	}
})