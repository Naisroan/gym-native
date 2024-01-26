import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { appStyles } from "themes"
import { CurrentTheme } from "hooks/useCurrentTheme"
import { TouchableColor, TouchableVariant } from "./helpers"

export const getStyles = (
	currentTheme: CurrentTheme,
	variant: TouchableVariant,
	color: TouchableColor,
	flatStyles?: StyleProp<ViewStyle>,
) => {
	const { palette } = currentTheme

	const touchableStyles: { [key in TouchableVariant]: ViewStyle } = {
		'default': {
			backgroundColor: 'transparent',
			borderColor: 'transparent',
			paddingHorizontal: 0,
			paddingVertical: 0
		},

		'contained': {
			backgroundColor: color === 'primary'
				? palette.PRIMARY_COLOR
				: palette.BG_COLOR,

			borderColor: color === 'primary'
				? palette.PRIMARY_COLOR
				: palette.BG_COLOR,
		},

		'outlined': {
			backgroundColor: palette.BG_COLOR,

			borderColor: color === 'primary'
				? palette.PRIMARY_COLOR
				: palette.BG_COLOR
		}
	}

	const textStyles: { [key in TouchableVariant]: TextStyle } = {
		'default': {
			color: color === 'primary'
				? palette.PRIMARY_COLOR
				: palette.TEXT_COLOR
		},

		'contained': {
			color: color === 'primary'
				? 'white'
				: palette.TEXT_COLOR
		},

		'outlined': {
			color: color === 'primary'
				? palette.PRIMARY_COLOR
				: palette.TEXT_COLOR
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
		},

		childrenContainer: {
			alignItems: 'center',
			flexDirection: 'row',
			gap: 4
		}
	})
}