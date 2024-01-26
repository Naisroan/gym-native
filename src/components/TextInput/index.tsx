import {
	TextInputProps as NativeTextInputProps,
	View
} from "react-native"

import {
	TextInput as NativeTextInput
} from "react-native-gesture-handler"

import { useCurrentTheme } from "hooks"
import { getStyles } from "./styles"
import { Text } from "components/Text"
import { TinyColor } from "@ctrl/tinycolor"

interface TextInputProps extends NativeTextInputProps {
	label?: string
}

export function TextInput({ label, style, ...rest }: TextInputProps) {
	const currentTheme = useCurrentTheme()
	const styles = getStyles({ currentTheme, flatStyles: style })

	return (
		<View style={styles.root}>

			{label && (
				<Text
					style={styles.labelText}
				>
					{label}
				</Text>
			)}

			<NativeTextInput
				placeholderTextColor={
					currentTheme.theme === 'dark'
						? new TinyColor(currentTheme.palette.TEXT_COLOR).darken(60).toHexString()
						: new TinyColor(currentTheme.palette.TEXT_COLOR).lighten(60).toHexString()
				}
				{...rest}
				style={styles.textInput}
			/>

		</View>
	)
}