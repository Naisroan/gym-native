import {
	appSlice,
	counterSlice
} from "./slices"

export default {
	app: appSlice.reducer,
	counter: counterSlice.reducer
}