import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';


export const SearchScreen = (props) => {

    return (
        <View style={{flex:1, alignContent:'center'}}>
            <Text>SearchScreen</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
        </View>
    )
}