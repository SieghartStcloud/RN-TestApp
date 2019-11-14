
import React, {
    useState
  } from 'react';
  
  import {
    StyleSheet,
    View,
    Text,
    Button,
    interpolate,
    Animated,
  } from 'react-native';

  import {DrawerActions, DrawerItems } from 'react-navigation-drawer';


  export const DrawerContentComponent = (props) => {
    // const translateX = props.drawerOpenProgress.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-100, 0],
    //   });

    const moveToSearchScreen = () => {
        // props.navigation.navigationAction
        props.navigation.navigate('Search')
    }

    return (
        // <Animated.View style={{ transform: [{ translateX }] }}>
        <Animated.View >
            <View style={{flext: 1, height: 50, alignSelf:'center', flexDirection:'column' }}>
                <Text>HEADER</Text>
            </View>
            <View style={{paddingBottom:5}}>
                <Button title="Close Panel" onPress={() => props.navigation.closeDrawer()}></Button>
            </View>
            
            <View style={{paddingBottom:5}}>
                <Button title="Search Screen" onPress={moveToSearchScreen}></Button>
            </View>
            
            <View style={{paddingBottom:5}}>
                <Button title="Option 3"></Button>
            </View>
        </Animated.View>
    )
    
  }