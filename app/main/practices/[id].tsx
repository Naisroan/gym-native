import { useEffect, useRef, useState } from "react"
import { Alert, Pressable, View } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { TimerPickerModalRef } from "react-native-timer-picker"
import { Guid } from "guid-typescript"
import { TouchableButton, Text, TextInput, TimerPicker } from "components"
import { PracticeType } from "types"
import { styles } from "views/main/practices/styles"

import { useAppDispatch, useAppSelector } from "store"
import { practicesActions } from "store/slices/practices/actions"

import Ionicons from '@expo/vector-icons/Ionicons'
import moment from "moment"
import _ from "lodash"

export default function PracticeFormPage() {
	const { id } = useLocalSearchParams()
	const dispatch = useAppDispatch()
	const statePractice = useAppSelector(state => state.practices.practice)
	const timerPickerRef = useRef<TimerPickerModalRef>(null)
	const isNew = id === '0'

	const [practice, setPractice] = useState<PracticeType>({
		id: Guid.create().toString(),
		name: '',
		created_at: moment().format("dd/MM/yyyy")
	})

	const [timer, setTimer] = useState<{
		open: boolean,
		title?: string,
		key?: keyof PracticeType,
		time?: number
	}>({ open: false })

	useEffect(() => {
		if (isNew === false) {
			dispatch(practicesActions.getOne(id as string))
		}
		return () => {
			dispatch(practicesActions.setOne())
		}
	}, [id])

	useEffect(() => {
		if (statePractice?.id) {
			setPractice(statePractice)
		}
	}, [statePractice?.id])

	function handleChangeText<T extends keyof PracticeType>(
		key: keyof PracticeType,
		value: PracticeType[T]
	) {
		setPractice({
			...practice,
			[key]: value
		})
	}

	function handleChangeTimer({ hours, minutes, seconds, }: {
		hours: number
		minutes: number
		seconds: number
	}) {
		const time = `${hours}:${minutes}:${seconds}`

		setPractice({
			...practice,
			[timer.key]: moment(time, "HH:mm:ss").toDate().getTime()
		})

		setTimer({ open: false })
	}

	function setTimerPickerValues(time?: number) {
		if (!timerPickerRef) {
			return
		}

		if (time) {
			const date = new Date(time)
			timerPickerRef.current.setValue({
				hours: date.getHours(),
				minutes: date.getMinutes(),
				seconds: date.getSeconds(),
			})
		} else {
			timerPickerRef.current.reset({ animated: true })
		}
	}

	function submit() {
		if (
			practice?.name
			&& practice?.duration
			&& practice?.repetitions
			&& practice?.break
		) {

			if (isNew) {
				dispatch(practicesActions.create(practice))
			} else {
				dispatch(practicesActions.update(practice.id, practice))
			}

			Alert.alert('Done!', 'Ejercicio guardado ✅', [])
			router.back()
		} else {
			Alert.alert('¡Espera!', 'Ingresa los datos faltantes 👀', [])
		}
	}

	return (
		<>
			<TimerPicker
				ref={timerPickerRef}
				visible={timer.open}
				modalTitle={timer?.title}
				setIsVisible={visible => setTimer({ open: visible })}
				onConfirm={handleChangeTimer}
			/>

			<View style={styles.root}>

				<View style={styles.header}>
					<View style={styles.headerTitleContainer}>

						<Pressable onPress={e => router.back()}>
							<Ionicons
								name={'arrow-back'}
								size={28}
							/>
						</Pressable>

						<Text variant="subtitle" style={styles.title}>
							{practice?.name || (isNew ? 'Nuevo ejercicio' : 'Editar ejercicio')}
						</Text>

					</View>

					<TouchableButton
						text="Guardar"
						variant="default"
						style={styles.saveButton}
						onPress={submit}
					/>

				</View>

				<View style={styles.fieldsContainer}>

					<TextInput
						label="Nombre"
						placeholder="Sentadillas"
						style={styles.textInput}
						onChangeText={e => handleChangeText('name', e)}
						value={practice?.name || ''}
					/>

					<TextInput
						label="Duración de cada serie"
						placeholder={
							`1 minuto de ${practice?.name?.toLocaleLowerCase() || 'sentadillas'}`
						}
						style={styles.textInput}
						value={practice?.duration
							? moment(practice?.duration).format('HH:mm:ss')
							: ''}
						editable={false}
						onPressIn={() => {
							setTimerPickerValues(practice?.duration)
							setTimer({
								open: true,
								key: 'duration',
								title: 'Tiempo de duración',
								time: practice?.duration
							})
						}}
					/>

					<TextInput
						label="Duración de descanso entre series"
						placeholder="20 segundos de descanso"
						style={styles.textInput}
						value={practice?.break
							? moment(practice?.break).format('HH:mm:ss')
							: ''}
						editable={false}
						onPressIn={() => {
							setTimerPickerValues(practice?.break)
							setTimer({
								open: true,
								key: 'break',
								title: 'Tiempo de descanso',
								time: practice?.duration
							})
						}}
					/>

					<TextInput
						editable
						label="Series"
						placeholder={`5 series de ${practice?.name?.toLocaleLowerCase() || 'sentadillas'}`}
						keyboardType="number-pad"
						style={styles.textInput}
						onChangeText={e => handleChangeText('repetitions', e)}
						value={practice?.repetitions?.toString() || ''}
					/>

				</View>
			</View>
		</>
	)
}