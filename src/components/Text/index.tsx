import {
	Text as ReactNativeText,
	TextProps as ReactNativeTextProps
} from "react-native"

import { useCurrentTheme } from "hooks/useCurrentTheme"
import { getStyles } from "./styles"

export interface TextProps extends ReactNativeTextProps {
}

export function Text({ style, ...rest }: TextProps) {
	const currentTheme = useCurrentTheme()
	const styles = getStyles(currentTheme, style)

	return (
		<ReactNativeText
			style={styles}
			{...rest}
		/>
	)
}