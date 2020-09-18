import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles/NoDataCardStyles';

const NoDataCard = () => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>No data Found</Text>
            <Text style={styles.text}>Sorry, nothing was found, try searching another word.</Text>
        </View>
    )

}

export default NoDataCard;