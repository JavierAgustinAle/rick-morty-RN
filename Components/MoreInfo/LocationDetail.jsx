import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// Compoent
import CharCard from '../Cards/CharCard';

const LocationDetail = props => {
    const location = props.navigation.getParam('location');
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
            <Text style={styles.titulo}>{location.name}</Text>
            <View style={styles.extra}>
                <Text style={styles.texto}>{`Type: ${location.type}`}</Text>
                <Text style={styles.texto}>{location.dimension ? `Dimension: ${location.dimension}` : `Dimension: Unknown`}</Text>
            </View>
            <View>
                <Text style={styles.residents}>Redidents</Text>
                {
                    location.residents[0].id != null
                        ? <FlatList
                            data={location.residents}
                            renderItem={renderGridItem}
                        />
                        : <Text style={styles.residents}>No Residents</Text>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 15,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 100
    },
    titulo: {
        fontSize: 28
    },
    extra: {
        paddingVertical: 5
    },
    texto: {
        fontSize: 16
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    residents: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20
    }
});

export default LocationDetail;