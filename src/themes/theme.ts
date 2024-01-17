import { ColorSchema, ThemeType } from "./types"

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

const FONT_FAMILY = 'Ubuntu'

export class Theme {

	fontSize = 16

	fontFamily: {
		default: string
		"300": string
		"400": string
		"500": string
		"700": string
	}

	constructor() {
		this.fontFamily = {
			default: `${FONT_FAMILY}400`,
			"300": `${FONT_FAMILY}300`,
			"400": `${FONT_FAMILY}400`,
			"500": `${FONT_FAMILY}500`,
			"700": `${FONT_FAMILY}700`
		}
	}

	primary = (currentTheme?: ThemeType): ColorSchema => ({
		...(currentTheme === 'dark'
			? PRIMARY_DARK_STYLES
			: PRIMARY_LIGHT_STYLES
		)
	})
}

export const theme = new Theme()