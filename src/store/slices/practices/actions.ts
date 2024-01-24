import { createAction } from "@reduxjs/toolkit"
import { PRACTICES_TYPES } from "./types"
import { PracticesState } from "."

const set = createAction(PRACTICES_TYPES.SET, <K extends keyof PracticesState>(key: keyof PracticesState, value: PracticesState[K]) => {
	return {
		payload: { key, value }
	}
})

export const practicesActions = {
	set
}