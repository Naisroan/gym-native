import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"

/**
 * Compose of many styles
 * @param styles Array styles
 * @param notApplyRootStyles Ignore root styles in compose
 * @returns 
 */
export function combineStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
	styles: StyleProp<ViewStyle | TextStyle | ImageStyle>[]
): T {
	let result: StyleProp<ViewStyle | TextStyle | ImageStyle> = {}

	styles.forEach(s => {
		result = StyleSheet.compose(result, s)
	});

	return result as T
}