import {
	Text as ReactNativeText,
	TextProps as ReactNativeTextProps
} from "react-native"

import { getStyles } from "./styles"

export interface TextProps extends ReactNativeTextProps {
}

export function Text({ style, ...rest }: TextProps) {
	const styles = getStyles(style)

	return (
		<ReactNativeText
			style={styles}
			{...rest}
		/>
	)
}