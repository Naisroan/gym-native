import { useAppSelector } from "store"
import { theme } from "themes"
import { ColorSchema, ThemeType } from "types"

export interface CurrentTheme {
	theme: ThemeType,
	palette: ColorSchema
}

export const useCurrentTheme = (): CurrentTheme => {
	const currentTheme = useAppSelector(state => state.app.currentTheme)
	const palette = theme.primary(currentTheme)

	return {
		theme: currentTheme,
		palette
	}
}