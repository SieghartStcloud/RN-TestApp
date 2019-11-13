import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  const props = {
      title: ''
  }

export const SupportButton = ( props ) => {
    const [title] = useState(props.title || 'default')

    return(
<View style={styles.welcomeSupportButtonBox}>
    <View style={[styles.supportButtonIcon, styles.tempGrid]}/>
    <Text style={styles.supportButtonText}>{title}</Text>
</View>
    )
};

const styles = StyleSheet.create({
    welcomeSupportButtonBox:{
        alignSelf:'flex-start',
        borderWidth: 1,
        borderColor: 'pink',
        paddingRight: 10,
        paddingLeft: 10,
    },
    supportButtonIcon:{
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
    tempGrid:{
        borderWidth: 1,
        borderColor: 'pink'
    }
  });