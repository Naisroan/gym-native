import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { combineStyles } from "./combineStyles"
import { STYLE_CONSTANTS } from "./constants"

export * from "./combineStyles"
export * from "./constants"

/** Root styles to any component */
const rootStyles = StyleSheet.flatten<ViewStyle | TextStyle | ImageStyle>({
	fontSize: STYLE_CONSTANTS.FONT_SIZE
})

/** Styles to each native components */
const nativeComponentsStyles = StyleSheet.create({

	/** React native 'Text' component styles */
	text: {
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
		paddingHorizontal: 16,
		paddingVertical: 14
	}
})

export const appStyles = {

	getTextStyles: (customStyles?: StyleProp<TextStyle>) =>
		combineStyles([rootStyles, nativeComponentsStyles.text, customStyles]),

	getViewStyles: (customStyles?: StyleProp<ViewStyle>) =>
		combineStyles([rootStyles, nativeComponentsStyles.view, customStyles]),

	getTouchableButtonStyles: (customStyles?: StyleProp<ViewStyle>) =>
		combineStyles([rootStyles, nativeComponentsStyles.touchableButton, customStyles])

}