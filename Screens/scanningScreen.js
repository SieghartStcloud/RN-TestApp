import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Button,
    Easing
  } from 'react-native';

import { MyCart } from '../Container/myCart'  
import { TouchableOpacity } from 'react-native-gesture-handler';

  export default ScanningScreen = (props) => {
    //STATE
    const [panelViewOn, setPanelViewOn] = useState(false);
    let value = 0

    //CSS VAR
    const panelVisible = [styles.teamPanel, styles.tempBorder]
    const panelNotVisible = [styles.teamPanelHidden, styles.tempBorder]

    //FUNCTIONS
    const teamPanelAction = () => {
        panelViewOn ? setPanelViewOn(false) : setPanelViewOn(true);
    }

    const AnimateAction = () => {
        Animated.timing( value , {
            toValue: 1,
            duration: 2000,
        }).start();
        teamPanelAction
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

            <MyCart></MyCart>
          
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