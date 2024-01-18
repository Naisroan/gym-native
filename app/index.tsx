import { useCallback, useEffect, useState } from 'react'
import { useSetFonts } from 'hooks'

import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'
import { router } from 'expo-router'

SplashScreen.preventAutoHideAsync();

export default function AppPage() {
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

			// redirect to home page
			router.replace('/home')
		}
	}, [appIsReady, fontsLoaded])

	if (!appIsReady || !fontsLoaded) {
		return null
	}

	return <View onLayout={onLayoutRootView} />
}