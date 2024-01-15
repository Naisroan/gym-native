import { createSlice } from "@reduxjs/toolkit"
import { counterActions } from "./actions"

export interface CounterState {
	current: 'active' | 'break' | 'none'
}

const initialState: CounterState = {
	current: 'none'
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(counterActions.set, (state, action) => {
			state.current = action.payload.value
		})
	}
})