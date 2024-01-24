import { Pressable, View } from "react-native"
import { FlatList, Text } from "components"
import { useCurrentTheme } from "hooks"
import { DATE_FORMAT } from "utils"
import { Practice } from "views/main/home/practices"
import { styles } from "views/main/home/practices/styles"

import Ionicons from '@expo/vector-icons/Ionicons'
import moment from "moment"
import _ from "lodash"

import { useAppSelector } from "store"
import { router } from "expo-router"

export default function PracticesPage() {
	const theme = useCurrentTheme()

	const practices = _.orderBy(
		useAppSelector(state => state.practices.data || []),
		p => moment(p.created_at, DATE_FORMAT).toDate(), ['desc']
	)

	return (
		<View style={{ flex: 1 }}>

			<View style={styles.header}>
				<Text variant="title" style={styles.titleText}>
					Ejercicios
				</Text>
				<Pressable
					style={styles.addPressable}
					onPress={e => {
						router.push('/main/practices/form')
					}}
				>
					<Ionicons
						name='add-sharp'
						size={24}
						color={theme.palette.TEXT_COLOR}
					/>
					<Text> Agregar </Text>
				</Pressable>
			</View>

			<FlatList
				data={practices}
				numColumns={2}
				spacing={10}
				keyExtractor={practice => practice.id}
				renderItem={practice => (
					<Practice
						practice={practice.item}
						viewProps={{ style: styles.practiceView }}
					/>
				)}
			/>

		</View>
	)
}