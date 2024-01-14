import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { appStyles, STYLE_CONSTANTS } from "themes"
import { TouchableVariant } from "./helpers"

export const getStyles = (variant: TouchableVariant, flatStyles?: StyleProp<ViewStyle>) => StyleSheet.create({
    root: appStyles.getTouchableButtonStyles({
        ...touchableStyles[variant],
        ...(flatStyles as ViewStyle)
    }),

    text: {
        fontWeight: "500",
        ...textStyles[variant],
    }
})

const touchableStyles: { [key in TouchableVariant]: ViewStyle } = {
    'default': {
        backgroundColor: STYLE_CONSTANTS.DEFAULT.BACKGROUND_COLOR,
        borderColor: STYLE_CONSTANTS.DEFAULT.TEXT_COLOR
    },

    'contained': {
        backgroundColor: STYLE_CONSTANTS.PRIMARY.BACKGROUND_COLOR,
        borderColor: STYLE_CONSTANTS.PRIMARY.BACKGROUND_COLOR
    },

    'outlined': {
        borderColor: STYLE_CONSTANTS.PRIMARY.BACKGROUND_COLOR
    }
}

const textStyles: { [key in TouchableVariant]: TextStyle } = {
    'default': {
        color: STYLE_CONSTANTS.DEFAULT.TEXT_COLOR
    },

    'contained': {
        color: STYLE_CONSTANTS.PRIMARY.TEXT_COLOR
    },

    'outlined': {
        color: STYLE_CONSTANTS.PRIMARY.BACKGROUND_COLOR
    }
}