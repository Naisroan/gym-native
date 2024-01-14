import {
	Button as ReactNativeButton,
	ButtonProps as ReactNativeButtonProps
} from "react-native"

export interface ButtonProps extends Omit<ReactNativeButtonProps, 'title'> {
	title?: string
}

export function Button({ ...rest }: ButtonProps) {
	return (
		<ReactNativeButton
			title="Soy un botón 🙂"
			{...rest}
		/>
	)
}