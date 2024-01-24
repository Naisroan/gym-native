import { CurrentTheme } from "hooks/useCurrentTheme"
import { StyleProp, StyleSheet, TextStyle } from "react-native"
import { appStyles } from "themes"

interface TextStylesProps {
	currentTheme: CurrentTheme
	flatStyles?: StyleProp<TextStyle>
}

export const getStyles = ({
	currentTheme,
	flatStyles
}: TextStylesProps) => StyleSheet.create({

	root: appStyles.getTextStyles({
		// component styles...
		color: currentTheme.palette.TEXT_COLOR,

		// override component styles with flatStyles...
		...(flatStyles as TextStyle)
	}),

	title: {
		fontSize: 32,
		fontWeight: "700"
	},

	subtitle: {
		fontSize: 24,
		fontWeight: "500"
	}

})