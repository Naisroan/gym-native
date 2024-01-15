import { createSlice } from "@reduxjs/toolkit";

interface AppState {
	globalSafeArea: boolean
}

const initialState: AppState = {
	globalSafeArea: true
}

export const appSlice = createSlice({
	name: "app",
	reducers: {},
	initialState: initialState
})