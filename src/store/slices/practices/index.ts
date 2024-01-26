import { createSlice } from "@reduxjs/toolkit"
import { practicesActions } from "./actions"
import { PracticeType } from "types"

export interface PracticesState {
	data: PracticeType[]
	practice?: PracticeType
}

const initialState: PracticesState = {
	data: [],
	practice: undefined
}

export const practicesSlice = createSlice({
	name: 'practices',
	initialState,
	reducers: {},
	extraReducers: builder => {

		builder.addCase(practicesActions.set, (state, { payload }) => {
			// @ts-ignore
			state[payload.key] = payload.value
		})

		builder.addCase(practicesActions.create, (state, { payload }) => {
			state.data.push(payload.practice)
		})

		builder.addCase(practicesActions.update, (state, { payload }) => {
			const idx = state.data.findIndex(p => p.id === payload.id)
			state.data[idx] = payload.practice
		})

		builder.addCase(practicesActions.getOne, (state, { payload }) => {
			state.practice = state.data.find(p => p.id === payload.id)
		})

		builder.addCase(practicesActions.setOne, (state, { payload }) => {
			state.practice = payload?.practice
		})
	}
})