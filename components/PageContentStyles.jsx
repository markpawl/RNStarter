import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',    // vertically center everything
        width: '100%',
    },
    leftGroup: {
        flexDirection: 'row',
        gap: 2,
    },
    rightGroup: {
        flexDirection: 'row',
        gap: 2,
    },

    preContent: {
        margin: 10,
        fontFamily: 'System',   // RN uses 'System' for system font, the long CSS fallback list is not needed
        fontSize: 18,           // 'large' has no RN equivalent, pick a concrete size
    },

    caretIcon: {
        fontSize: 20,           // 'larger' has no RN equivalent
    },

    songTitle: {
        fontWeight: 'normal',
        fontSize: 16,           // 'medium' has no RN equivalent
        backgroundColor: 'bisque',
        width: 220,
        height: 30,
        paddingTop: 2,
        overflow: 'hidden',
        // display: 'inline-block' has no RN equivalent — RN uses flex, not inline layout
    },

    songHeader: {
        flexDirection: 'row',   // display:flex is implicit, just set flexDirection
        backgroundColor: 'blanchedalmond',
        padding: 5,
    },

    songHeaderImage: {        // '.songHeader img' becomes a named style applied to the <Image> component
        backgroundColor: 'blanchedalmond',
        height: 30,
        borderRadius: 5,        // RN borderRadius is pixels not %, 15% of 30px ≈ 5
    },

    eventHeader: {
        backgroundColor: '#FFEBCD', //bisque
        padding: 5,
        fontSize: 16,           // 'normal' has no RN equivalent
        fontWeight: 'normal',
    },

    bolded: {
        fontWeight: 'bold',
    },

    borderWhite: {
        borderWidth: 2,
        borderColor: 'blanchedalmond',
        height: 24,
        borderRadius: 4,        // 15% of 24px ≈ 4
        fontSize: 30,
        textAlign: 'center',    // center horizontally
        lineHeight: 28,         // center vertically — must match height
    },

    borderBlack: {
        borderWidth: 2,
        borderColor: '#aaa',
        backgroundColor: '#aaa',
        // height: 24,
        borderRadius: 4,
        fontSize: 30,
        textAlign: 'center',    // center horizontally
        lineHeight: 28,         // center vertically — must match height
    },

    pageEnd: {
        height: 20,
        backgroundColor: 'bisque',
    },

    reverse: {
        transform: [{ rotate: '45deg' }],  // RN transform is an array of objects
        // :after pseudo-element has no RN equivalent — use a separate <View> or <Text> component instead
    },

});