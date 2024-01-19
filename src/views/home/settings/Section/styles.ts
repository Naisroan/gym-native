import { TinyColor } from "@ctrl/tinycolor"
import { CurrentTheme } from "hooks"
import { StyleSheet } from "react-native"

export const getStyles = (currentTheme: CurrentTheme) => StyleSheet.create({
	root: {
	},
	titleText: {
		color: new TinyColor(currentTheme.palette.TEXT_COLOR).lighten(60).toHexString(),
		fontSize: 14,
		marginBottom: 12
	}
})