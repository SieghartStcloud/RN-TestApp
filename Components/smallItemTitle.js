import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';

export const SmallItemTile = (props) =>{
    const [description, setDiscription] = useState(props.description || 'default')
    const [price, setPrice] = useState(props.price || 0.00)
    const [active, setActive] = useState(props.active || false)
    const [deleted, setDeleted] = useState(props.deleted || false)

    useEffect(() => {
        if(props.active !== active){
            setActive(props.active)
        }
    }, [props.active])

    return (
        <View style={[{flex:1, padding:10, borderWidth:1, borderColor:'pink'}, active? {backgroundColor:'lightgreen'}: {backgroundColor:'yellow'}, deleted? {backgroundColor: 'gray'}: {}]}>
            <Text style={[{color:'black'}, deleted? {textDecorationLine: 'line-through'}: {}]}>{description}</Text>
            <Text style={[{color:'black'}, deleted? {textDecorationLine: 'line-through'}: {}]}>{price}</Text>
        </View>
    )
}