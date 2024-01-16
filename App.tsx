import { Provider } from 'react-redux'
import { Main } from 'views'
import store from 'store'
import { SafeAreaView } from 'react-native'

export default function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	)
}