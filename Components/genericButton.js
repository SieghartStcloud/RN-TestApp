import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';

  import { TouchableOpacity } from 'react-native-gesture-handler';

  let props = {
      pressAction: ()=>{},
      title: '',
      backgroundColor: '',
      textColor: '',
      textSize: 12,
      height: '',
      elevation: '',
      icon: React.Component,
  }

  export const GenericButton = ( props ) => {
      const id = useRef()
    //state
    const [title, setTitle] = useState(props.title || '')
    useEffect(()=>{
        setTitle(props.title)
    },[props.title])

    //function

    return(
        <View style={{
        }
            
        }>
            <TouchableOpacity style={[{elevation: 9}]} onPress={props.pressAction} ref={id}>
                <View style={[styles.genericButtonContainer,{ backgroundColor: props.backgroundColor, height: props.height}, styles.tempBorder]}>
                    
                    {/* TITLE */}
                    { title === ''? 
                    <View style={{display:'none'}}></View>
                    :
                    <Text style={[styles.genericButtonText, styles.tempBorder, {color: props.textColor, fontSize: props.textSize}]}>{title}</Text> 
                    }
                    
                    {/* ICON */}
                    {props.icon !== null ?
                    <View style={
                        [
                            styles.genericButtonIcon,
                            styles.tempBorder,
                        ]
                        }>
                        {props.icon}
                    </View>
                    :
                    <View style={{display:'none'}}></View>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )

  }

  const styles = StyleSheet.create({
    genericButtonContainer: {
        flexDirection:'row',
        padding:10,
        borderRadius:6,
        // height:100,
    },
    genericButtonText:{
        flex:0.9,
        fontWeight:'bold',
        alignSelf:'center'
    },
    genericButtonIcon:{
        flex:0.1,
        alignSelf:'center',
    },
    // tempBorder:{
    //     borderWidth:1,
    //     borderColor:'pink'
    // }
})