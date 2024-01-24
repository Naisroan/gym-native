import { View, ViewProps } from "react-native"
import { PracticeType } from "types"
import { Text } from "components"
import { styles } from "./styles"

interface PracticeProps {
	practice: PracticeType
	viewProps?: ViewProps
}

export function Practice({ practice, viewProps }: PracticeProps) {
	const { id, name, imageSrc } = practice

	return (
		<View {...viewProps} style={[styles.root, viewProps.style]}>
			<View style={styles.container}>
				<Text> {name} </Text>
			</View>
		</View>
	)
}