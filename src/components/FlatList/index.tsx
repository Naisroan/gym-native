import {
	View,
	FlatListProps as FlatListNativeProps
} from "react-native"

import {
	FlatList as NativeGestureFlatList
} from "react-native-gesture-handler"

interface FlatListProps<T> extends FlatListNativeProps<T> {
	spacing?: number
}

export function FlatList<T>({
	spacing = 0,
	...rest
}: FlatListProps<T>) {
	const { renderItem, ...restProps } = rest
	return (
		<NativeGestureFlatList
			contentContainerStyle={{ rowGap: spacing }}
			columnWrapperStyle={{ marginHorizontal: -(spacing / 2) }}
			renderItem={item => (
				<View
					key={item.index}
					style={{ flex: 1 / (rest?.numColumns || 1) }}
				>
					<View style={{ flex: 1, marginHorizontal: spacing / 2 }}>
						{renderItem(item)}
					</View>
				</View>
			)}
			{...restProps}
		/>
	)
}