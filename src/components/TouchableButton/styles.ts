import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { appStyles } from "themes"
import { CurrentTheme } from "hooks/useCurrentTheme"
import { TouchableVariant } from "./helpers"

export const getStyles = (
	currentTheme: CurrentTheme,
	variant: TouchableVariant,
	flatStyles?: StyleProp<ViewStyle>
) => {
	const { palette, theme } = currentTheme

	const touchableStyles: { [key in TouchableVariant]: ViewStyle } = {
		'default': {
			backgroundColor: 'transparent',
			borderColor: palette.TEXT_COLOR
		},

		'contained': {
			backgroundColor: palette.PRIMARY_COLOR,
			borderColor: palette.PRIMARY_COLOR
		},

		'outlined': {
			borderColor: palette.PRIMARY_COLOR
		}
	}

	const textStyles: { [key in TouchableVariant]: TextStyle } = {
		'default': {
			color: palette.TEXT_COLOR
		},

		'contained': {
			color: 'white'
		},

		'outlined': {
			color: palette.PRIMARY_COLOR
		}
	}

	return StyleSheet.create({
		root: appStyles.getTouchableButtonStyles({
			...touchableStyles[variant],
			...(flatStyles as ViewStyle)
		}),

		text: {
			fontWeight: "500",
			...textStyles[variant],
		}
	})
}