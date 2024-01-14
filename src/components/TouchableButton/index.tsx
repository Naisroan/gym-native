import { Text, TextProps } from "components/Text"
import { TouchableTypeProps, TouchableImplementation, touchableComponents, TouchableVariant } from "./helpers"
import { getStyles } from "./styles"

type TouchableButtonProps = TouchableTypeProps & {
	variant?: TouchableVariant
	implementation?: TouchableImplementation
	text?: string
	textProps?: TextProps
}

export function TouchableButton({
	variant = 'contained',
	implementation = 'opacity',
	text,
	children,
	style,
	textProps,
	...rest
}: TouchableButtonProps) {

	const styles = getStyles(variant, style)
	const TouchableComponent = touchableComponents[implementation]

	return (
		// @ts-ignore
		<TouchableComponent {...rest} style={styles.root}>
			{Boolean(children) ? children : (
				<Text style={styles.text} {...textProps}>
					{text}
				</Text>
			)}
		</TouchableComponent>
	)
}