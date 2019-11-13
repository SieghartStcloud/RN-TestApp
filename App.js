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
  StyleSheet,
  View,
} from 'react-native';



import { AppNavigator } from './Tools/ReactNavigation'

const App = () => {
  return (
    <View style={[styles.app, styles.tempGrid]}>
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
