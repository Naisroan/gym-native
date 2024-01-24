import { createSlice } from "@reduxjs/toolkit"
import { practicesActions } from "./actions"
import { PracticeType } from "types"

export interface PracticesState {
	data: PracticeType[]
	practice: PracticeType | null
}

const initialState: PracticesState = {
	data: [
		{ id: '1', name: 'Test1', created_at: '18/01/2024' },
		{ id: '2', name: 'Test2', created_at: '19/01/2024' },
		{ id: '4', name: 'Test3', created_at: '20/01/2024' },
		{ id: '5', name: 'Test3', created_at: '20/01/2024' },
		{ id: '6', name: 'Test3', created_at: '20/01/2024' },
		{ id: '7', name: 'Test3', created_at: '20/01/2024' },
		{ id: '8', name: 'Test3', created_at: '20/01/2024' },
		{ id: '9', name: 'Test3', created_at: '20/01/2024' },
		{ id: '10', name: 'Test3', created_at: '20/01/2024' },
		{ id: '11', name: 'Test3', created_at: '20/01/2024' },
		{ id: '12', name: 'Test3', created_at: '20/01/2024' },
		{ id: '13', name: 'Test3', created_at: '20/01/2024' },
		{ id: '14', name: 'Test3', created_at: '20/01/2024' },
		{ id: '15', name: 'Test3', created_at: '20/01/2024' },
		{ id: '16', name: 'Test3', created_at: '20/01/2024' },
		{ id: '17', name: 'Test3', created_at: '20/01/2024' },
		{ id: '18', name: 'Test3', created_at: '20/01/2024' },
		{ id: '19', name: 'Test3', created_at: '20/01/2024' },
		{ id: '20', name: 'Test3', created_at: '20/01/2024' },
		{ id: '21', name: 'Test3', created_at: '20/01/2024' },
		{ id: '22', name: 'Test3', created_at: '20/01/2024' },
		{ id: '23', name: 'Test3', created_at: '20/01/2024' },
	],
	practice: null
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
	}
})