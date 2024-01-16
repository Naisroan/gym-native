import { CurrentTheme } from "hooks/useCurrentTheme"
import { StyleProp, TextStyle } from "react-native"
import { appStyles } from "themes"

export const getStyles = (currentTheme: CurrentTheme, flatStyles?: StyleProp<TextStyle>) =>
	appStyles.getTextStyles({
		// component styles...
		color: currentTheme.palette.TEXT_COLOR,

		// override component styles with flatStyles...
		...(flatStyles as TextStyle)
	})