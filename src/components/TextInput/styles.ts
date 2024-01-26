import { StyleProp, StyleSheet, TextStyle } from "react-native"
import { TinyColor } from "@ctrl/tinycolor"
import { CurrentTheme } from "hooks/useCurrentTheme"
import { appStyles } from "themes"

interface TextInputStylesProps {
	currentTheme: CurrentTheme
	flatStyles?: StyleProp<TextStyle>
}

export const getStyles = ({
	currentTheme,
	flatStyles
}: TextInputStylesProps) => StyleSheet.create({

	root: {

	},

	labelText: {
		marginBottom: 8
	},

	textInput: appStyles.getTextInputStyles({
		// component styles...
		color: currentTheme.palette.TEXT_COLOR,
		borderColor: new TinyColor(currentTheme.palette.TEXT_COLOR).lighten(60).toHexString(),

		// override component styles with flatStyles...
		...(flatStyles as TextStyle)
	})

})