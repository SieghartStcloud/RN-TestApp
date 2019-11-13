import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  export default ScanningScreen = () => {
    return (
        <View style={[styles.initialScreen, styles.tempBorder]}>
        {/* SCANNED ITEM CONTAINER */}
          <View style={[styles.scannedItemContainer, styles.tempBorder]}>
              <View style={[styles.scannedItemDisplay, styles.tempBorder]}></View>
              <View style={[styles.supportButtonContainer], styles.tempBorder}>
                  <Text>test</Text>
              </View>
          </View>

          <View style={[styles.myCartContainer, styles.tempBorder]}></View>
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
    myCartContainer:{
        flex:0.3,
        // display:'none',

        backgroundColor: 'lightgreen'
    },

    tempBorder:{
        borderWidth: 1,
        borderColor: 'pink',
    }
  })