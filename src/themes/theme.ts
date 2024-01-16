import { ColorSchema, ThemeType } from "types"

const PRIMARY_DARK_STYLES = {
	BG_COLOR: '#161616',
	PRIMARY_COLOR: '#702f35',
	TEXT_COLOR: 'white'
}

const PRIMARY_LIGHT_STYLES = {
	BG_COLOR: '#F5F5F5',
	PRIMARY_COLOR: '#fe5938',
	TEXT_COLOR: '#181818'
}

export class Theme {

	fontSize = 16

	primary = (currentTheme?: ThemeType): ColorSchema => ({
		...(currentTheme === 'dark'
			? PRIMARY_DARK_STYLES
			: PRIMARY_LIGHT_STYLES
		)
	})
}

export const theme = new Theme()