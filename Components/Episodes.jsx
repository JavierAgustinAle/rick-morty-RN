import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
// Redux
import { connect } from 'react-redux';

const Episodes = props => {

    return (
        <View>
            <Text>Episodes</Text>
        </View>
    )
}
function mapState(state) {
    return {
        initial: state.episodes.array,
        filtered: state.episodes.filtered,
        error: state.episodes.errorEpiso,
        search: state.episodes.searchEpi
    }
}


export default connect(mapState)(Episodes);