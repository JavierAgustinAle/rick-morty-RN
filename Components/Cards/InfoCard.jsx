import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const InfoCard = props => {

    if (props.title === 'episode') {
        return (
            <View style={styles.card}>
                <Text style={styles.texto}>{`${props.data.name}
                    Episode: ${props.data.episode}
                        `}</Text>
            </View>
        )
    }
    if (props.title === 'location') {
        let dimension
        props.data.dimension ? dimension = props.data.dimension : dimension = 'Unknown'
        return (
            <View style={styles.card}>
                <Text style={styles.titulo} numberOfLines={2}>{props.data.name}</Text>
                <Text style={styles.texto}> Dimension:</Text>
                <Text style={styles.texto} numberOfLines={2}>{dimension}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: '#460685',
        padding: 20,
        borderRadius: 10,
        height: 140
    },
    texto: {
        color: 'white',
        paddingTop: 2
    },
    titulo: {
        textAlign: 'center',
        color: 'white'
    }
})

export default InfoCard;