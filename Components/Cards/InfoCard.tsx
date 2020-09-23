import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles/InfoCardStyles';



const InfoCard: React.FC<any> = props => {

    if (props.title === 'episode') {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>{`${props.data.name}
                    Episode: ${props.data.episode}
                        `}</Text>
            </View>
        )
    } else {
        let dimension: string = props.data.dimension ? props.data.dimension : 'Unknown';
        return (
            <View style={styles.card}>
                <Text style={styles.title} numberOfLines={2}>{props.data.name}</Text>
                <Text style={styles.text}> Dimension:</Text>
                <Text style={styles.text} numberOfLines={2}>{dimension}</Text>
            </View>
        )
    }
}



export default InfoCard;