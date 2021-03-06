import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: '#B22222',
        padding: 20,
        borderRadius: 10,
        height: 140
    },
    text: {
        color: 'white',
        paddingTop: 5,
        fontSize: 18
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    }
})