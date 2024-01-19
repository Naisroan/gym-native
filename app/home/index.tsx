import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Text } from "components"
import { styles } from "views/home/styles"

export default function HomePage() {
	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			<Text style={styles.titleText}>Hola</Text>
			<Text style={styles.subtitleText}>Elige un ejercicio para iniciar</Text>

			<View style={{ flex: 1 }}>
				<ScrollView>
				</ScrollView>
			</View>

		</View>
	)
}