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
// import  {createSwitchNavigator, createAppContainer} from 'react-navigation';
// import {createDrawerNavigator, Drawer} from 'react-navigation-drawer';
// import welcomeScreen from './Screens/welcomeScreen';
// import scanningScreen from './Screens/scanningScreen';





const App = () => {
  return (
    <View style={[styles.app, styles.tempGrid]}>
      <AppNavigator />
      {/* <AppContainer></AppContainer> */}
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

// //--

// const AppDrawerNavigator = createDrawerNavigator({
//   Scanning: {
//     screen: scanningScreen
//   }
// })

// //---

// const AppSwitchNavigator =  createSwitchNavigator({
//   Welcome: {screen: welcomeScreen},
//   Scanning: { screen: AppDrawerNavigator}
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);

// //----



