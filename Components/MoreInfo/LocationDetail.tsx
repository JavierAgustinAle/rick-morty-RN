import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Styles/LocationDetailStyles';
// Model
import { ILocations } from '../../Interfaces/ILocations.model';
// Compoent
import CharCard from '../Cards/CharCard';

const LocationDetail: React.FC<any> = props => {

    const location: ILocations = props.navigation.getParam('location');

    const renderGridItem = itemData => {

        return (
            <View style={styles.gridItem}>
                <CharCard name={itemData.item.name}
                    image={itemData.item.image} />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{location.name}</Text>
            <View style={styles.extra}>
                <Text style={styles.text}>{`Type: ${location.type}`}</Text>
                <Text style={styles.text}>{location.dimension ? `Dimension: ${location.dimension}` : `Dimension: Unknown`}</Text>
            </View>
            <View>
                <Text style={styles.residents}>Residents</Text>
                {
                    location.residents[0].id != null
                        ? <FlatList
                            data={Object.values(location.residents)}
                            renderItem={renderGridItem}
                            keyExtractor={item => item.id}
                        />
                        : <Text style={styles.residents}>No Residents</Text>
                }

            </View>
        </View>
    )
}



export default LocationDetail;