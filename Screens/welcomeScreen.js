import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';

import { SupportButton } from '../Components/supportButton'

export default WelcomeScreen = (props) => {
  const [counter, setCounter] = useState(0);

  const toScanningScreen = () => {
    props.navigation.navigate('Scanning')
    setCounter(counter + 1)
  }

  return (
    <View style={[wstyles.welcomeScreen, wstyles.tempGrid]}>
          {/* buttons logo */}
          <View style={[wstyles.logoBox, wstyles.tempGrid]}>
            {/* Temp for showing state change */}
            <Text style={{textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>{counter}</Text>
          </View>
          {/* welcome title container */}
          <View style={[wstyles.welcomeTextContainer, wstyles.tempGrid]}>
            <Text style={[wstyles.welcomeTextTitle, wstyles.tempGrid]}>CARD ONLY</Text>
            <Text style={wstyles.welcomeTextSubTitleContainer}>
              <Text style={wstyles.welcomeTextSubTitle}>Cash payments and cash out </Text>
              <Text style={wstyles.welcomeTextSubTitleNotAvailable}>not available</Text>
              <Text style={wstyles.welcomeTextSubTitle}> at Self Checkout</Text></Text>
          </View>
          {/* button Container */}
          <View style={[wstyles.welcomeButtonContainer, wstyles.tempGrid]}>
            <View style={{flex:0.35, alignSelf:'center', borderWidth:1, borderColor:'pink', borderRadius:10}}>
              <Button title='Tap Screen Or Scan To Start' onPress={toScanningScreen}></Button>
            </View>
          </View>
          <View style={[wstyles.welcomeFooter, wstyles.tempGrid]}>
            <View style={[wstyles.welcomeSupportButtonArea, wstyles.tempGrid]}>
                <SupportButton title="English"></SupportButton>
                <SupportButton title="Accessibility"></SupportButton>
            </View>
            <View style={wstyles.welcomeAcceptedPaymentTypes}>
              <View style={{flex:0.5, flexDirection:'row', height: 50, borderWidth:1, borderColor:'pink'}}>
                 {/* PaymentType title */}
                 <Text style={[{color:'#4D4D4D', fontWeight:'bold', alignSelf:'flex-end'},wstyles.tempGrid]}>Accepted Payment Types</Text>
              </View>
              <View style={[{flex:0.5, flexDirection:'row', overflow:'hidden'}, wstyles.tempGrid]}>
                  {/* PaymentType icons */}
                  <PaymentTypeIcons/>
                  <PaymentTypeIcons/>
                  <PaymentTypeIcons/>
                  <PaymentTypeIcons/>
                  <PaymentTypeIcons/>
                  <PaymentTypeIcons/>
                  <PaymentTypeIcons/>
              </View>
            </View>
          </View>
        </View>
  )
};

const PaymentTypeIcons = () => {
    return (
      <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
    )
  }

const wstyles = StyleSheet.create({
    welcomeScreen:{
      flex:1,
      margin: 10,
      backgroundColor: '#0D5257',
    },
    logoBox: {
      margin: 20,
      width: 175,
      height:50,
      backgroundColor: '#ffff',
    },
    welcomeTextContainer: {
      flex:1,
    },
    welcomeTextSubTitleContainer:{
      textAlign:'center',
    },
    welcomeTextTitle:{
      color: '#fff',
      textAlign:'center',
      fontSize: 88,
    },
    welcomeTextSubTitle:{
      color: '#fff',
      textAlign:'center',
      letterSpacing: 1.5,
    },
    welcomeTextSubTitleNotAvailable:{
      color: '#F2AE3D',
      textAlign:'center',
      letterSpacing: 1.5,
    },
    welcomeButtonContainer:{
      flex: 1,
      flexDirection:'row',
      alignSelf:'center',
      height: 50,
    },
    welcomeFooter:{
      flex:1,
      flexDirection:'row',
      backgroundColor: '#fff',
    },
    welcomeSupportButtonArea:{
      flex:0.5,
      flexDirection:'row',
      alignSelf:'flex-end',
      margin: 10,
    },
    welcomeSupportButtonContainer:{
      alignSelf:'flex-start',
      borderWidth: 1,
      borderColor: 'pink',
      paddingRight: 10,
      paddingLeft: 10,
    },
    supportButton:{
      alignSelf:'flex-start',
      width: 100,
      height: 100,
      backgroundColor: 'lightblue',
      borderRadius: 100,
    },
    supportButtonText:{
      color:'#0D5257',
      textAlign:'center'
    },
    welcomeAcceptedPaymentTypes: {
      flex:0.5,
    },
  
    tempGrid:{
      borderWidth: 1,
      borderColor: 'pink'
    }
  });