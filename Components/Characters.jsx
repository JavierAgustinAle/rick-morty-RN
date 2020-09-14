import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Modal, Text, TouchableHighlight, } from 'react-native';
import moment from "moment";
// Components
import CharCard from './Cards/CharCard';
import SearchBar from './Search/SearchBar';
import Pagination from './Pagination/Pagination';
import NoDataCard from './Cards/NoDataCard';

// Redux
import { connect } from 'react-redux';

const Characters = props => {
    const [modalVisible, setModalVisible] = useState(true);
    const date = moment().format('MMMM Do YYYY');

    const title = 'characters';

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Character', params: {
                        char: itemData.item
                    }
                })
            }}>
                <View >
                    <CharCard name={itemData.item.name}
                        image={itemData.item.image} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            {
                modalVisible ?
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
                                        }}
                                    >
                                        <Text style={styles.textButton}>ENTER</Text>
                                    </TouchableHighlight>
                                    <Text style={styles.text}>{date}</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    :
                    <View style={styles.screen}>
                        <View style={styles.center}>
                            <SearchBar title={title} />
                        </View>
                        {
                            props.error === false ?
                                <FlatList data={props.filtered.length > 0 ? props.filtered : props.initial} renderItem={renderGridItem} numColumns={2} />
                                : <View style={styles.noData}><NoDataCard /></View>
                        }
                        {
                            props.error === false && props.filtered.length < 1 ?
                                <View style={styles.center}>
                                    <Pagination title={title} />
                                </View>
                                : null

                        }
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
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

function mapState(state) {
    return {
        initial: state.characters.array,
        filtered: state.characters.filtered,
        error: state.characters.error,
        search: state.characters.search
    }
}


export default connect(mapState)(Characters);