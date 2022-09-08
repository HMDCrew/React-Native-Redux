import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from './theme'

export { COLORS, FONTS, SIZES };

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    home_wrap_content: {
        list: {
            card: {
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
                view: {
                    width: "100%",
                    height: 250,
                    image: {
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }
                },
            },
        },
        home_bg: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            header: {
                height: 300,
                backgroundColor: COLORS.primary
            },
            content: {
                flex: 1,
                backgroundColor: COLORS.white
            }
        },
    },
    d_flex: { flex: 1 },
    zIndex_1: { zIndex: -1 },
    zIndex0: { zIndex: 0 },
    zIndex1: { zIndex: 1 },
})

