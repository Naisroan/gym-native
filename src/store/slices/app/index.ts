import { createSlice } from "@reduxjs/toolkit"
import { appActions } from "./actions"

export interface AppState {

	currentTheme: 'light' | 'dark'

	/** If is true set the global wrapper as SafeAreaView else as View */
	globalSafeArea: boolean

}

const initialState: AppState = {
	currentTheme: 'light',
	globalSafeArea: true
}

export const appSlice = createSlice({
	name: "app",
	reducers: {},
	initialState: initialState,
	extraReducers: builder => {
		builder.addCase(appActions.set, (state, { payload, type }) => {
			// @ts-ignore
			state[payload.key] = payload.value
		})
	}
})