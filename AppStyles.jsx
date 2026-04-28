import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    // ul — use a <View> instead of <ul> in RN
    list: {
        padding: 0,
        margin: 5,
        // list-style: none is irrelevant in RN, there are no list bullets
    },

    // button — apply to <TouchableOpacity> or <Button> wrapper View
    button: {
        borderRadius: 6,          // 20% of 30px height ≈ 6
        borderColor: 'rgb(179, 137, 86)',
        borderWidth: 1,           // borderColor alone does nothing, borderWidth is required
        height: 30,
    },

    // hide/show — display:none/block has no direct RN equivalent
    // in RN use conditional rendering instead:
    // {isVisible && <View>...</View>}
    // or conditionally apply: style={isHidden ? { display: 'none' } : {}}
    hide: {
        display: 'none',          // this does work in RN as a special case
    },
    // show has no RN equivalent — just omit the hide style to show
    bolded: {
        fontWeight: 'bold',
    },

    title: {
        fontWeight: 'bold',
        backgroundColor: '#FFE4C4FF', // Bisque with FF (opaque) alpha channel
    },

    artistTitle: {
        fontWeight: 'bold',
        fontSize: 20,        // 'larger' has no RN equivalent, pick a concrete size
        marginLeft: 10,
        color: 'white',
        // width: 'auto' is the default in RN, so omit it
    },

    appHeader: {
        backgroundColor: '#d2691eff',
        flexDirection: 'row', // flex is on by default, but RN defaults to 'column' so set 'row' if you want horizontal like a typical header
        alignItems: 'center',
        // justifyContent: 'normal' has no RN equivalent, omit it (defaults to 'flex-start')
        padding: 5,
    },
    setlistmodal: {
        backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 8,
        padding: 16,
    },

    modalOverlay: {
        flex: 1, // This makes the view fill the entire screen
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //backgroundColor: '#000000ff', // Black with 100% opacity
        //backgroundColor: 'rgba(0, 0, 0, 0.5)', // This gives the "dimmed" background look
        justifyContent: 'center', // Centers the modal content vertically
        alignItems: 'center',     // Centers the modal content horizontally        
    },

    venuemodal: {        
        // backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 10,
        padding: 20,
    },

    menumodal: {
        // backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 8,
        padding: 16,
    },

    artistmodal: {
        // backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 8,
        padding: 16,
    },

    hidden: {
        display: 'none',
    },

    bordered: {
        borderWidth: 2,
        borderColor: '#D2691E',
        borderRadius: 4,
        padding: 10,
    },

});
