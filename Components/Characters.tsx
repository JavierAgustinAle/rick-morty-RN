import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Modal, Text, TouchableHighlight, } from 'react-native';
import moment from "moment";
import styles from './Styles/CharactersStyle';
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

    function goToCharacter(itemData) {
        props.navigation.navigate({
            routeName: 'Character', params: {
                char: itemData.item
            }
        })
    }


    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => goToCharacter(itemData)} >
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
                                        onPress={() => setModalVisible(!modalVisible)}
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
                                <FlatList data={props.filtered.length > 0 ? props.filtered : props.initial}
                                    renderItem={renderGridItem} numColumns={2} keyExtractor={item => item.id} />
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


function mapState(state) {
    return {
        initial: state.characters.array,
        filtered: state.characters.filtered,
        error: state.characters.error,
        search: state.characters.search
    }
}


export default connect(mapState)(Characters);