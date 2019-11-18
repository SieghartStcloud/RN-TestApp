import React, { useState, useEffect, useRef } from 'react';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
  } from 'react-native';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';


  const props = {
    itemList: [{}],
    children: React.Component
}

export const ScrollableList = (props) =>{
    const [itemList, setItemList] = useState( props.itemList || [{}])
    const [scrollPosition, setScrollPosition] = useState()
    const [scrollSize, setScrollSize] = useState()
    

    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#F7F7F7'}}>
            <View style={{flex:1,}}>
                {props.children}
            </View>

            {/* SCROLL MANUAL && TOUCH */}
            <View style={{backgroundColor:'#F7F7F7'}}>
                <View style={styles.scrollContainer}>
                    
                    {/* TOP ARROW */}
                    <TouchableOpacity>
                        <View style={styles.scrollButtonTop}>
                            <FontAwesomeIcon icon={faSortUp} style={{alignSelf:'center', marginTop:13}} color='white' size={20}></FontAwesomeIcon>
                        </View>
                    </TouchableOpacity>

                    {/* SCROLLBAR */}
                    <View style={{flex:1, borderWidth:1, borderColor:'#0D5257', backgroundColor:'#EBEEEE'}}>
                    
                    {/* SCROLLPOSITION */}
                    <View style={{height:40 ,backgroundColor:'#0D5257', opacity:0.42, borderRadius:12, marginTop:2, marginBottom:2}}></View>

                    </View>
                    
                    {/* BOTTOM ARROW */}
                    <TouchableOpacity>
                        <View style={styles.scrollButtonBottom}>
                            <FontAwesomeIcon icon={faSortDown} style={{alignSelf:'center', marginTop:5}} color='white' size={20}></FontAwesomeIcon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer:{
        flex:1, 
        width:40, 
        justifyContent:'space-between', 
        // borderWidth:1, 
        // borderColor:'blue',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:10,
        paddingBottom:10,
    },
    scrollButtonTop:{
        height:35, 
        backgroundColor:'#0D5257',
        borderTopRightRadius:25, 
        borderTopStartRadius:25,
    },
    scrollButtonBottom:{
        height:35, 
        backgroundColor:'#0D5257',
        borderBottomLeftRadius:25, 
        borderBottomEndRadius:25,
        
    }
})