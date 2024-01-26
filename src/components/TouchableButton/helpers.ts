import { ComponentType } from "react"
import {
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,

	TouchableOpacityProps,
	TouchableHighlightProps,
	TouchableNativeFeedbackProps,
	TouchableWithoutFeedbackProps
} from "react-native"

export type TouchableVariant = 'contained' | 'outlined' | 'default'

export type TouchableColor = 'primary' | 'default'

export type TouchableImplementation = 'opacity'
	| 'highlight'
	| 'without-feedback'
	| 'native-feedback'

export type TouchableType = TouchableOpacity
	| TouchableHighlight
	| TouchableNativeFeedback
	| TouchableWithoutFeedback

export type TouchableTypeProps = TouchableOpacityProps
	| TouchableHighlightProps
	| TouchableNativeFeedbackProps
	| TouchableWithoutFeedbackProps

export const touchableComponents: { [key in TouchableImplementation]: ComponentType } = {
	"opacity": TouchableOpacity,
	"highlight": TouchableHighlight,
	"native-feedback": TouchableNativeFeedback,
	"without-feedback": TouchableWithoutFeedback
}