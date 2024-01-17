import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Home } from 'views'
import { useSetFonts } from 'hooks'

import { Provider } from 'react-redux'
import store from 'store'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)
	const [fontsLoaded] = useSetFonts()

	useEffect(() => {
		async function prepare() {
			try {
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady && fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady, fontsLoaded])

	if (!appIsReady || !fontsLoaded) {
		return null
	}

	return (
		<Provider store={store}>
			<Home onLayoutRootView={onLayoutRootView} />
		</Provider>
	)
}