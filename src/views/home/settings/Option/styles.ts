import { CurrentTheme } from "hooks"
import { StyleSheet } from "react-native"

export const getStyles = (currentTheme: CurrentTheme) => StyleSheet.create({
	root: {
		backgroundColor: currentTheme.theme === 'light' ? '#FFFFFF' : '#000000',
		borderRadius: 8,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOffset: { height: 0, width: 0 },
		shadowOpacity: 1,
		shadowRadius: 3,
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 24,
		paddingHorizontal: 12
	},
	titleText: {
		fontWeight: "500"
	},
	box: {
		flex: 1
	},
	optionBox: {
		alignItems: 'flex-end'
	}
})