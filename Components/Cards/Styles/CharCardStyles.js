import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        height: '100%',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 10
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        height: '100%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5,

    }
})