import { View } from "react-native"
import { Text, TextProps } from "components/Text"
import { useCurrentTheme } from "hooks/useCurrentTheme"

import {
	TouchableTypeProps,
	TouchableImplementation,
	touchableComponents,
	TouchableVariant,
	TouchableColor
} from "./helpers"

import { getStyles } from "./styles"

type TouchableButtonProps = TouchableTypeProps & {
	variant?: TouchableVariant
	color?: TouchableColor
	implementation?: TouchableImplementation
	text?: string
	textProps?: TextProps
}

export function TouchableButton({
	variant = 'contained',
	color = 'primary',
	implementation = 'opacity',
	text,
	children,
	style,
	textProps,
	...rest
}: TouchableButtonProps) {
	const currentTheme = useCurrentTheme()
	const styles = getStyles(currentTheme, variant, color, style)

	const TouchableComponent = touchableComponents[implementation]

	return (
		// @ts-ignore
		<TouchableComponent {...rest} style={styles.root}>
			{Boolean(children) ? (
				<View style={styles.childrenContainer}>
					{children}
				</View>
			) : (
				<Text style={styles.text} {...textProps}>
					{text}
				</Text>
			)}
		</TouchableComponent>
	)
}