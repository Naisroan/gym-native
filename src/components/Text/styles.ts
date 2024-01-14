import { StyleProp, TextStyle } from "react-native"
import { appStyles } from "themes"

export const getStyles = (flatStyles?: StyleProp<TextStyle>) =>
	appStyles.getTextStyles({
		// component styles...

		// override component styles with flatStyles...
		...(flatStyles as TextStyle)
	})