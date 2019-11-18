import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
  } from 'react-native';

  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

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

    const changeDeleted = () => {
        setDeleted(!deleted)
    }

    return (
        <View style={[{width:290, padding:10, borderWidth:1, borderColor:'pink'}, active? {backgroundColor:'lightgreen'}: {backgroundColor:'yellow'}, deleted? {backgroundColor: 'gray'}: {}]}>
            <View style={{flex:1, flexDirection:'row', paddingBottom:10}}>
                <Text style={[{flex:0.7,color:'black'}, deleted? {textDecorationLine: 'line-through'}: {}]}>{description}</Text>
                <Text style={[{flex:0.2,color:'black'}, deleted? {textDecorationLine: 'line-through'}: {}]}>{price}</Text>
                <TouchableOpacity onPress={changeDeleted}>
                    <FontAwesomeIcon icon={faWindowClose} style={{flex:0.3,color:'red'}} size={15}></FontAwesomeIcon>
                </TouchableOpacity>
            </View>
        </View>
    )
}