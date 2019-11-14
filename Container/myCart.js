import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';

  const props = {
      title: ''
  }

export const MyCart = ( props ) => {
    const [fullView, setFullView] = useState(false)
    const [title] = useState(props.title || 'default')
    const [activeItem, setActiveItem] = useState()
    const [basketCounter, setBasketCounter] = useState(0)
    const [totalCost, setTotalCost] = useState(0)


    return(
        <View style={[styles.myCartContainer, styles.tempBorder]}>
            {/* HEADER */}
            <TouchableOpacity onPress={()=>setBasketCounter(basketCounter + 1)}>
                <View style={[styles.myCartHeader, styles.tempBorder]}>
                    <Text style={[styles.myCartHeaderText]}>My Cart: {basketCounter} {basketCounter === 1 ? 'Item' : 'Items'}</Text>
                </View>
            </TouchableOpacity>
            
            
            {/* BODY */}
            <View style={[{flex:0.8, flexDirection:'column', backgroundColor:'lightgreen'}, styles.tempBorder]}>
                <ScrollView>
                    <View style={[{flex:1, padding:10}, styles.tempBorder]}>
                        <Text>test</Text>
                    </View>

                </ScrollView>
                

            </View>
                        
            
            {/* FOOTER */}
            <View style={[{flex:0.2, flexDirection:'column'}, styles.tempBorder]}>
                <View style={[styles.totalCostContainer, styles.tempBorder]}>
                    <Text style={[{flex:0.5, alignSelf:'center', fontWeight:'700', fontSize:20},styles.tempBorder]}>Total</Text>
                    <Text style={[{flex:0.5, alignSelf:'center',fontWeight:'700', fontSize:35, textAlign:'right'},styles.tempBorder]}>${totalCost}</Text>
                </View>
                <View style={{flex:0.5, flexDirection:'column',justifyContent:'space-evenly', marginLeft:15, marginRight: 15}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'white', fontWeight:'700', fontSize:20 }}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    myCartContainer:{
        flex:0.3,
        flexDirection: 'column',
        backgroundColor: '#ffff'
    },
    myCartHeader:{
        // flex:1,
        // flexDirection:'row',
        height: 58,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'

    },
    myCartHeaderText:{
        color: '#0D5257',
        fontWeight:'bold', 
        textAlign:'left', 
        marginTop:'auto', 
        marginBottom:'auto', 
        marginLeft:15,
    },
    totalCostContainer:{
        flex:0.5,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        flex:1,
        justifyContent:'space-evenly',
        alignSelf:'stretch',
        // alignItems: 'center',
        backgroundColor: '#DA291C',
        padding: 25,
        borderRadius: 5,
        // boxShadow: '10 10 red'
        // shadowOffset:{  width: 20,  height: 20,  },
        // shadowColor: 'black',
        // shadowOpacity: 1.0,
        elevation:2


    },
    
    tempBorder:{
        borderWidth: 1,
        borderColor: 'pink',
    }
})