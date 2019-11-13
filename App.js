/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  useState
} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

//SCREENS
import WelcomeScreen from './Screens/welcomeScreen'

//REACT NAVIATION
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const PaymentTypeIcons = () => {
  return (
    <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
  )
}

// NEW VIEW
const ScanningScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Scanning Screen</Text>
      </View>
    );
  }

  // NEW NAV FILE
const RootStack = createStackNavigator(
  {
    Home: WelcomeScreen,
    Scanning: ScanningScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(RootStack);

// STAYS HERE
const App = () => {
  return (
    <View style={styles.app}>
      <AppNavigator />
    </View>
  );
};

export const styles = StyleSheet.create({
  app:{
    flex:1,
    alignContent:'stretch',
    backgroundColor:'gray'
  },
  tempGrid:{
    borderWidth: 1,
    borderColor: 'pink'
  }
});

export default App;
