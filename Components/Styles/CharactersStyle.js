import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noData: {
        paddingHorizontal: 35,
        paddingTop: 50
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        width: '100%',
        height: '100%',
        margin: 20,
        backgroundColor: '#FAFAFA',
        padding: 35,
        alignItems: "center"
    },
    button: {
        backgroundColor: "#F194FF",
        padding: 10,
        borderRadius: 5,
        elevation: 2,
        width: 100,
        marginBottom: 40
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 320,
    }
})