import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput
  } from 'react-native';


export const SearchScreen = (props) => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <View style={{flex:1}}>
            
            {/* HEADER */}

            <View style={{height: 50, backgroundColor:'black'}}>
                <TouchableOpacity style={{flex:1, flexDirection:'row', alignSelf:'center', borderWidth:1, borderColor:'pink'}} onPress={() => props.navigation.goBack()}>
                    <Text style={{flex: 0.5,color:'white', alignSelf:'center', fontSize:20}}>Back</Text>
                    <Text style={{flex:0.2, color:'orange', alignSelf:'center', fontSize:15, fontWeight:'bold'}}>Team Member Mode</Text>
                    <Text style={{flex:0.7, color:'white', alignSelf:'center', fontSize:15,fontWeight:'bold'}}>Search Shadowbooks</Text>
                </TouchableOpacity>
            </View>

            {/* INPUT */}

            <View>
            <TextInput 
                style={[{height:40, borderWidth:1, borderColor:'gray', color: 'black', borderRadius:5, marginLeft:10, marginRight:10, marginTop:5, marginBottom:5}]} 
                placeholder="Type Product Name or Item Number here.."
                onChangeText={text => setSearchValue(text)}
                value={searchValue}
                keyboardAppearance='dark'
                />
            </View>

            {/* BODY */}
            <View style={{flex:1, backgroundColor:'#F7F7F7', borderTopWidth:1, borderTopColor:'lightgray'}}></View>
        </View>
    )
}