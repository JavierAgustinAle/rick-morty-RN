import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// Components
import CharCard from './Cards/CharCard';
// Redux
import { connect } from 'react-redux';

const Characters = props => {

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
        <FlatList data={props.initial} renderItem={renderGridItem} numColumns={2} />


    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
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