import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import moment from "moment";


const StartScreen = props => {
    const [modalVisible, setModalVisible] = useState(true);
    const date = moment().format('MMMM Do YYYY');
    return (
        <View style={styles.centeredView}>
            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>REACT NATIVE CHALLENGE</Text>
                        <Text style={styles.text}>Javier Ale</Text>
                        <TouchableHighlight
                            style={{ ...styles.button, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                props.navigation.replace({
                                    routeName: 'Characters'
                                })
                            }}
                        >
                            <Text style={styles.textButton}>ENTER</Text>
                        </TouchableHighlight>
                        <Text style={styles.text}>{date}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default StartScreen;