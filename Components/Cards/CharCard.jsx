import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles/CharCardStyles';

const CharCard = props => {
    return (
        <View style={styles.item}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}



export default CharCard;