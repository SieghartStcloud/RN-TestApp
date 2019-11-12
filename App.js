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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <View style={styles.app}>
        <View style={styles.welcomeScreen}>
          {/* buttons logo */}
          <View style={styles.bunningsLogo}>
            {/* Temp for showing state change */}
            <Text style={{textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>{counter}</Text>
          </View>
          {/* welcome title container */}
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTextTitle}>CARD ONLY</Text>
            <Text style={styles.welcomeTextSubTitleContainer}>
              <Text style={styles.welcomeTextSubTitle}>Cash payments and cash out </Text>
              <Text style={styles.welcomeTextSubTitleNotAvailable}>not available</Text>
              <Text style={styles.welcomeTextSubTitle}> at Self Checkout</Text></Text>
          </View>
          {/* button Container */}
          <View style={styles.welcomeButtonContainer}>
            <View style={{flex:0.35, alignSelf:'center', borderWidth:1, borderColor:'pink', borderRadius:10}}>
              <Button title='Tap Screen Or Scan To Start' onPress={()=>{setCounter(counter+1)}}></Button>
            </View>
          </View>
          <View style={styles.welcomeFooter}>
            <View style={styles.welcomeSupportButtonArea}>
              {/* support button component */}
              <View style={styles.welcomeSupportButtonContainer}>
                <View style={styles.supportButton}/>
                <Text style={styles.supportButtonText}>English</Text>
              </View>
              {/* support button component */}
              <View style={styles.welcomeSupportButtonContainer}>
                <View style={styles.supportButton}/>
                <Text style={styles.supportButtonText}>Accessibility</Text>
              </View>
            </View>
            <View style={styles.welcomeAcceptedPaymentTypes}>
              <View style={{flex:0.5, flexDirection:'row', height: 50, borderWidth:1, borderColor:'pink'}}>
                 {/* PaymentType title */}
                 <Text style={{color:'#4D4D4D', fontWeight:'bold', alignSelf:'flex-end', borderWidth:1, borderColor:'pink'}}>Accepted Payment Types</Text>
              </View>
              <View style={{flex:0.5, flexDirection:'row', borderWidth:1, borderColor:'pink'}}>
                  {/* PaymentType icons */}
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
                  <View style={{width: 75, height: 40, marginTop:'auto', marginBottom:'auto', marginRight:10, backgroundColor:'lightgray'}}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  app:{
    flex:1,
    alignContent:'stretch',
    backgroundColor:'gray'
  },
  welcomeScreen:{
    flex:1,
    margin: 10,
    backgroundColor: '#0D5257',
    
    borderWidth: 1,
    borderColor: 'pink'
  },
  bunningsLogo: {
    margin: 20,
    width: 175,
    height:50,
    backgroundColor: '#ffff',

    borderWidth: 1,
    borderColor: 'pink'
  },
  welcomeTextContainer: {
    flex:1,

    borderWidth: 1,
    borderColor: 'pink'
  },
  welcomeTextSubTitleContainer:{
    textAlign:'center',
  },
  welcomeTextTitle:{
    color: '#fff',
    textAlign:'center',
    fontSize: 88,

    borderWidth: 1,
    borderColor: 'pink'
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
    borderWidth: 1,
    borderColor: 'pink'
  },
  welcomeFooter:{
    flex:1,
    flexDirection:'row',
    backgroundColor: '#fff',

    borderWidth: 1,
    borderColor: 'pink'
  },
  welcomeSupportButtonArea:{
    flex:0.5,
    flexDirection:'row',
    alignSelf:'flex-end',
    margin: 10,

    borderWidth: 1,
    borderColor: 'pink'
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

    borderWidth: 1,
    borderColor: 'pink'
  },
  supportButtonText:{
    color:'#0D5257',
    textAlign:'center'
  },
  welcomeAcceptedPaymentTypes: {
    flex:0.5,

    borderWidth: 1,
    borderColor: 'pink'
  },
});

export default App;
