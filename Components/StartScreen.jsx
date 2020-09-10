import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const StartScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Welcome</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StartScreen;