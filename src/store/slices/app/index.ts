import { createSlice } from "@reduxjs/toolkit"

interface AppState {

	currentTheme: 'light' | 'dark'

	/** If is true set the global wrapper as SafeAreaView else as View */
	globalSafeArea: boolean

}

const initialState: AppState = {
	currentTheme: 'dark',
	globalSafeArea: true
}

export const appSlice = createSlice({
	name: "app",
	reducers: {},
	initialState: initialState
})