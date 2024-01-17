import { useFonts } from "expo-font"

export const useSetFonts = () => {
	return useFonts({
		Ubuntu300: require("../../assets/fonts/ubuntu/Ubuntu300.ttf"),
		Ubuntu400: require("../../assets/fonts/ubuntu/Ubuntu400.ttf"),
		Ubuntu500: require("../../assets/fonts/ubuntu/Ubuntu500.ttf"),
		Ubuntu700: require("../../assets/fonts/ubuntu/Ubuntu700.ttf")
	})
}