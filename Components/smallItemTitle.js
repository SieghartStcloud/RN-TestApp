import React, { useState, useEffect, useRef } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
  } from 'react-native';

import { ListItem } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const props = {
    item: {
        id: '',
        description: '',
        price: '',
        imageUrl: '',
    },
    active: false,
    deleted: false,
    deleteAction: ()=>{},
    selectedAction: ()=>{}
}

export const SmallItemTile = (props) =>{
    // const id = useRef()
    //State
    const [id, setId] = useState(props.item.id)
    const [description, setDescription] = useState(props.item.description || 'default')
    const [price, setPrice] = useState(props.item.price || 0.00)
    const [imageUrl, setImageUrl] = useState(props.item.uri || 'https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif')
    const [active, setActive] = useState(props.active || false)
    const [deleted, setDeleted] = useState(props.deleted || false)

    const deletedTextStyle = {textDecorationLine:'line-through'}
    const [tileStyle, setTileStyle] = useState({backgroundColor:'white'})

    useEffect(() => {
        if(props.active !== active){
            setActive(props.active)
        }
    }, [props.active])

    useEffect(()=>{
        const itemCheck = props.item
        if(itemCheck.description !== description){
            setDescription(props.item.description)
        }
        if(itemCheck.price !== price){
            setPrice(props.item.price)
        }
        if(itemCheck.imageUrl !== imageUrl){
            setImageUrl(props.item.imageUrl)
        }
    },[props.item])

    useEffect(()=> {
        if(props.deleted !== deleted){
            setDeleted(props.deleted)
        }
    },[props.deleted])

    useEffect(()=>{
        if(deleted){
            setTileStyle({backgroundColor:'lightgray'})
        }
        if(active){
            setTileStyle({backgroundColor:'lightgreen'})
        }
        if(!deleted && !active){
            setTileStyle({backgroundColor:'white'})
        }
    }, [deleted, active])

    //function
    const DeletedAction = () => {
        props.deleteAction()
        setDeleted(!deleted)
    }

    const ActivateAction = () => {
        // selectedAction
        // setActive(!active)
    }


    return (
            <ListItem
                title={description}
                titleStyle={deleted? deletedTextStyle : {}}
                containerStyle={[tileStyle]}
                leftAvatar={{
                    source: { uri: imageUrl }
                    }}
                    rightIcon={
                        <View>
                        <Text>{`$${price}`}</Text>
                        <TouchableOpacity onPress={DeletedAction}>
                            <FontAwesomeIcon icon={faWindowClose} style={{flex:0.3,color:'red'}} size={15}></FontAwesomeIcon>
                        </TouchableOpacity>
                        </View>
                }
            ></ListItem>
        
    )
}