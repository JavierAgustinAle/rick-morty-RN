import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import Characters from './Components/Characters';
import Episodes from './Components/Episodes';
import Locations from './Components/Locations';

export default function App() {
  return (
    <View style={styles.container}>
      <Characters />
      <Episodes />
      <Locations />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
