import { createAction } from "@reduxjs/toolkit"
import { PRACTICES_TYPES } from "./types"
import { PracticesState } from "."
import { PracticeType } from "types"

const set = createAction(PRACTICES_TYPES.SET, <K extends keyof PracticesState>(key: keyof PracticesState, value: PracticesState[K]) => {
	return {
		payload: { key, value }
	}
})

const create = createAction(PRACTICES_TYPES.CREATE, (practice: PracticeType) => ({
	payload: { practice }
}))

const update = createAction(PRACTICES_TYPES.UPDATE, (id: string, practice: PracticeType) => ({
	payload: { id, practice }
}))

const getOne = createAction(PRACTICES_TYPES.GET_ONE, (id: string) => ({
	payload: { id }
}))

const setOne = createAction(PRACTICES_TYPES.SET_ONE, (practice?: PracticeType) => ({
	payload: { practice }
}))

export const practicesActions = {
	set,

	create,
	update,

	getOne,
	setOne,
}