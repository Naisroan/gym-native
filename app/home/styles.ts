import { CurrentTheme } from "hooks"
import { Platform, StyleSheet } from "react-native"

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