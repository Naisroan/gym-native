import { Pressable, View, ViewProps } from "react-native"
import { PracticeType } from "types"
import { Text } from "components"
import { styles } from "./styles"
import { router } from "expo-router"

interface PracticeProps {
	practice: PracticeType
	viewProps?: ViewProps
}

export function Practice({ practice, viewProps }: PracticeProps) {
	const { id, name, imageSrc } = practice

	return (
		<View {...viewProps} style={[styles.root, viewProps.style]}>
			<Pressable
				style={styles.pressable}
				onPress={e => {
					router.push(`/main/practices/${id}`)
				}}
			>
				<View style={styles.container}>
					<Text> {name} </Text>
				</View>
			</Pressable>
		</View>
	)
}