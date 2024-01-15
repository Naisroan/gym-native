import { createAction } from "@reduxjs/toolkit"
import { COUNTER_TYPES } from "./types"
import { CounterState } from "."

const set = createAction(COUNTER_TYPES.SET, (key: keyof CounterState, value: any) => ({
	payload: { key, value }
}))

export const counterActions = {
	set
}