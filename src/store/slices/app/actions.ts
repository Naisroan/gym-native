import { createAction } from "@reduxjs/toolkit"
import { APP_TYPES } from "./types"
import { AppState } from "."

const set = createAction(APP_TYPES.SET, <K extends keyof AppState>(key: keyof AppState, value: AppState[K]) => {
	return {
		payload: { key, value }
	}
})

export const appActions = {
	set
}