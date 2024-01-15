import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import store from 'store'
import { Main } from 'views'

export default function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	)
}