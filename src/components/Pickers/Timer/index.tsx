import { ForwardedRef, forwardRef, useEffect, useRef } from "react"

import {
	TimerPicker as NativeTimerPicker,
	TimerPickerProps as NativeTimerPickerProps,
	TimerPickerModal as NativeTimerPickerModal,
	TimerPickerModalProps as NativeTimerPickerModalProps,
	TimerPickerModalRef
} from "react-native-timer-picker"

import { useCurrentTheme } from "hooks"

export interface Time {
	hours: number
	minutes: number
	seconds: number
}

type TimerPickerProps = (NativeTimerPickerProps & NativeTimerPickerModalProps) & {
	variant?: 'modal' | 'fullscreen',
}

export const TimerPicker = forwardRef((props: TimerPickerProps, ref: ForwardedRef<TimerPickerModalRef>) => {
	const { variant, ...rest } = props
	const currentTheme = useCurrentTheme()

	const Timer = variant === 'fullscreen'
		? NativeTimerPicker
		: NativeTimerPickerModal

	function handleConfirm({ hours, minutes, seconds, }: Time) {
		rest.onConfirm({ hours, minutes, seconds })
	}

	return (
		<Timer
			{...rest}
			ref={ref}
			styles={{
				...rest?.styles,
				theme: currentTheme.theme
			}}
			onConfirm={handleConfirm}
		/>
	)
})