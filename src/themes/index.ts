import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { combineStyles } from "./combineStyles"
import { theme } from "./theme"

export * from "./combineStyles"
export * from "./theme"
export * from "./types"

/** Root styles to any component */
const rootStyles = StyleSheet.flatten<ViewStyle | TextStyle | ImageStyle>({
	fontSize: theme.fontSize
})

/** Styles to each native components */
const nativeComponentsStyles = (flatStyles?: StyleProp<ViewStyle | TextStyle | ImageStyle>) => StyleSheet.create({

	/** React native 'Text' component styles */
	text: {
		fontFamily: getFamilyFont(flatStyles as TextStyle)
	},

	/** React native 'Button' component styles */
	button: {
	},

	/** React native 'View' component styles */
	view: {
	},

	/** Custom component 'TouchableButton' component styles */
	touchableButton: {
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 14,
		paddingVertical: 12
	}
})

export const appStyles = {

	getTextStyles: (flatStyles?: StyleProp<TextStyle>) =>
		combineStyles([rootStyles, nativeComponentsStyles(flatStyles).text, flatStyles]),

	getViewStyles: (flatStyles?: StyleProp<ViewStyle>) =>
		combineStyles([rootStyles, nativeComponentsStyles(flatStyles).view, flatStyles]),

	getTouchableButtonStyles: (flatStyles?: StyleProp<ViewStyle>) =>
		combineStyles([rootStyles, nativeComponentsStyles(flatStyles).touchableButton, flatStyles])

}

const getFamilyFont = (flatStyles?: TextStyle): string => {
	const fontWeight: number =
		!Boolean(flatStyles.fontWeight) || flatStyles.fontWeight === 'normal'
			? 400
			: flatStyles.fontWeight === 'bold'
				? 700
				: parseInt(flatStyles.fontWeight)

	return (
		fontWeight <= 300
			? theme.fontFamily[300]
			: fontWeight <= 400
				? theme.fontFamily[400]
				: fontWeight <= 500
					? theme.fontFamily[500]
					: theme.fontFamily[700]
	)
}