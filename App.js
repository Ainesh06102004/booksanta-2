import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Loginscreen from './screens/loginscreen';


export default function App() {
  return (
    <View style={styles.container}>
      <Appcontainer />
    </View>
  );
}

const Switch = createSwitchNavigator({
  loginscreen: Loginscreen
})

const Appcontainer = createAppContainer(Switch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

