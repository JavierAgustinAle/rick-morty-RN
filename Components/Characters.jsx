import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// Components
import CharCard from './Cards/CharCard';
import { CHARACTERSDATA } from '../DATA/charactersData';

const Characters = () => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Detail', params: {
                        char: itemData.item
                    }
                })
            }}>
                <View >
                    <CharCard name={itemData.item.name}
                        img={itemData.item.img} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList data={CHARACTERSDATA} renderItem={renderGridItem} numColumns={2} />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default Characters;