import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Button,
    Easing,
    Dimensions,
  } from 'react-native';

import { MyCart } from '../Container/myCart'
import { MyCartV2 } from '../Container/myCartV2' //TEMP  
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StateContext, useGlobalStore } from '../StateManagement/globalStore'

  export default ScanningScreen = (props) => {
    //STATE
    const [initialState, dispatch] = useGlobalStore();
    const [panelViewOn, setPanelViewOn] = useState(false);
    let value = 0

     //SETTING CURRENT SCREEN AT INITIAL RENDER
    useEffect(()=> {
    dispatch({type: 'SET_CURRENT_SCREEN', payload: 'Scanning'})
},[])

    //FUNCTIONS
    const teamPanelAction = () => {
        panelViewOn ? setPanelViewOn(false) : setPanelViewOn(true);
    }

    return (
        <View style={[styles.initialScreen, styles.tempBorder]}>
        {/* SCANNED ITEM CONTAINER */}
          <View style={[styles.scannedItemContainer, styles.tempBorder]}>
              <View style={[styles.scannedItemDisplay, styles.tempBorder]}></View>
              <View style={[styles.supportButtonContainer], styles.tempBorder}>
                  {/* <Button onPress={()=> props.navigation.toggleDrawer()} title="Open Draw"></Button> */}
              </View>
              
          </View>

            <MyCartV2></MyCartV2>
          
        </View>
      );
  }

  const styles = StyleSheet.create({
    initialScreen:{
        flex:1,
        flexDirection:'row'
    },
    scannedItemContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor: 'lightgray',
    },
    scannedItemDisplay:{
        flex: 0.9,
        
        backgroundColor: 'lightblue'
    },
    supportButtonContainer:{
        flex:0.5,

        backgroundColor: 'white'
    },
    teamPanel:{
        flex:0.3,
        backgroundColor:'yellow',
    },

    teamPanelHidden:{
        display: 'none'
    },

    tempBorder:{
        borderWidth: 1,
        borderColor: 'pink',
    }
  })