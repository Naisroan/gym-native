import {
	appSlice,
	counterSlice,
	practicesSlice
} from "./slices"

export default {
	app: appSlice.reducer,
	counter: counterSlice.reducer,
	practices: practicesSlice.reducer
}