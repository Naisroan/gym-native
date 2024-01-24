import {
	Text as ReactNativeText,
	TextProps as ReactNativeTextProps
} from "react-native"

import { useCurrentTheme } from "hooks/useCurrentTheme"
import { getStyles } from "./styles"

export interface TextProps extends ReactNativeTextProps {
	variant?: 'none' | 'title' | 'subtitle'
}

export function Text({ style, variant, ...rest }: TextProps) {
	const currentTheme = useCurrentTheme()
	const styles = getStyles({ currentTheme, flatStyles: style })

	return (
		<ReactNativeText
			style={[
				styles.root,
				variant === 'title' && styles.title,
				variant === 'subtitle' && styles.subtitle
			]}
			{...rest}
		/>
	)
}