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

//NAV
import { AppNavigator } from './Tools/ReactNavigation'
//STATE
import { fullState, reducer, StateProvider } from './StateManagement/globalStore'

const App = () => {
  return (
    <StateProvider initialState={fullState} reducer={reducer}>
      <View style={[styles.app, styles.tempGrid]}>
        <AppNavigator />
      </View>
    </StateProvider>
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

