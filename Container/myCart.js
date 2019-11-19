import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';

import { TouchableOpacity, ScrollView ,FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';

//COMPONENT
import { SmallItemTile } from '../Components/smallItemTitle';
import { GenericButton } from '../Components/genericButton';
import { ScrollableList } from '../Container/scrollableList';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart, faArrowRight, faWindowClose, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

//MOCK DATA
import { ItemList, Image } from '../MockData/mockData'


export const MyCart = ( props ) => {
    const [isFullView, setIsFullView] = useState(false)
    const [title] = useState(props.title || 'default')
    const [activeItem, setActiveItem] = useState(0)
    const [deleteItem, setDeleteItem] = useState()
    const [basketCounter, setBasketCounter] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [itemList, setItemList] = useState( ItemList || [{}])
    const [scrollOffset, setScrollOffset] = useState()
    const [flatListRef] = useState(useRef())
    const [flatListHeight, setFlatListHeight] = useState(0)

    // let flatListRef = useRef()

    // const refs = itemList.reduce((acc, value)=> {
    //     acc[value.id] = createRef()
    //     return acc
    // },{})

    const [temp, setTemp] = useState('red')

    const [scrollToIndex, setScrollToIndex] = useState(0)

    useEffect(()=>{   
        if(itemList.length !== basketCounter){
            setBasketCounter(itemList.length)
        }
    },[itemList])

    useEffect(()=> {
        if(itemList.length !== basketCounter ){
            let totalCostTally = 0;
            itemList.forEach(item=>{ item.deleted? totalCostTally = totalCost - item.price : totalCostTally += item.price})
            setTotalCost(totalCostTally)

        }
       
    },[itemList.length])

    const expandView = () => {
        isFullView? setIsFullView(false) : setIsFullView(true);
    }   

    const HandleTileClick = (index) => {
        setActiveItem(index)
        flatListRef.current.scrollToIndex({animated:true, index:index, offset:0})
        // refs[index].current.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        // })

    }

    // scrollToIndex = (index) => {
    //     if(flatListRef !== undefined){
    //         flatListRef.scrollToIndex({animated: true, index: index});
    //     }
    //   }



    return(
        <View style={[isFullView? styles.myCartContainerExpanded : styles.myCartContainer, styles.tempBorder]}>

            {/* HEADER */}
            <View style={[isFullView? styles.myCartHeaderLG : styles.myCartHeaderSM]}>

                <View style={{flex:1, flexDirection:'row'}}>
                    <FontAwesomeIcon icon={faShoppingCart} style={{alignSelf:'center', marginLeft: 5}} size={20}></FontAwesomeIcon>
                    <Text style={[styles.myCartHeaderText]}>My Cart: {basketCounter} {basketCounter === 1 ? 'Item' : 'Items'}</Text>
                </View>
                    <View style={{flex:0.2, alignSelf:'center'}}>
                        
                        {<GenericButton 
                            title={isFullView? "Close Summary" : ''}
                            height={60}
                            backgroundColor={isFullView? "#F2AE3D" : '#fff'}
                            textColor='black'
                            elevation={3}
                            icon={<FontAwesomeIcon icon={isFullView? faArrowRight : faBars} color='black' style={{width:'20%', marginTop:'auto', marginBottom:'auto'}}></FontAwesomeIcon>}
                            pressAction={expandView}
                            >
                                
                        </GenericButton>}
                         
                    </View>

            </View>
            
            
            {/* BODY */}
            <View style={[{flex:0.8, flexDirection:'column', backgroundColor:'lightgray'}, styles.tempBorder]}>
            
                <ScrollableList itemList={itemList} listRef={flatListRef} scrollOffset={scrollOffset} listHeight={flatListHeight}>
                    <View>
                        <FlatList
                            ListHeaderComponent={()=>{
                                return(
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faArrowDown} size={20} onPress={()=>{flatListRef.current.scrollToEnd()}}></FontAwesomeIcon>
                                    </TouchableOpacity>
                                )
                            }}
                            data={itemList}
                            renderItem={({item, index}) => 
                                <TouchableOpacity key={item.id} onPress={()=>{HandleTileClick(index)}} style={{marginLeft:10, marginRight:10, marginTop:5, marginBottom:5}}>
                                    <SmallItemTile
                                        id={item.id}
                                        item={item}
                                        active={activeItem === index? true : false}
                                        deleted={item.deleted}
                                        deleteAction={() => {item.deleted = !item.deleted}}
                                        />
                                </TouchableOpacity>
                            }
                            ref={flatListRef}
                            keyExtractor={(item, index) => item.description + index.toString()}
                            contentContainerStyle={isFullView?{flexDirection: 'row'}: {}}
                            showsVerticalScrollIndicator={false}
                            scrollToIndex={{index: scrollToIndex}}
                            onScroll={(e)=> {setScrollOffset(e.nativeEvent.contentOffset.y)}}
                            onLayout={(e) => {setFlatListHeight(e.nativeEvent.layout.height)}}
                            ListFooterComponent={()=>{
                                return(
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faArrowUp} size={20} onPress={()=>{flatListRef.current.scrollToIndex({animated:true, index:0})}}></FontAwesomeIcon>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    
                    
                </ScrollableList>
                
            </View>
                        
            
            {/* FOOTER */}
            <View style={[isFullView? styles.footerContainerLG : styles.footerContainerSM]}>
                <View style={[isFullView? styles.totalCostContainerLG : styles.totalCostContainerSM]}>
                    <Text style={[{flex:0.5, alignSelf:'center', fontWeight:'700', fontSize:20}]}>Total</Text>
                    <Text style={[{flex:0.5, alignSelf:'center',fontWeight:'700', fontSize:35, textAlign:'right'}]}>${totalCost}</Text>
                </View>
                
                <View style={[isFullView?{flex:0.8,flexDirection:'row-reverse', alignSelf:'center'}: {flex:0.5, alignSelf:'center'}]}>
                    <View style={isFullView? {width:275} : {width:275, marginTop:'auto', marginBottom:'auto'}}>
                        <GenericButton 
                            backgroundColor='#DA291C' 
                            title='Pay Now' 
                            textColor='white'
                            textSize={20}
                            height={60}
                            icon={<FontAwesomeIcon icon={faArrowRight} color='white' size={20}></FontAwesomeIcon>}>
                        </GenericButton>
                    </View>
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
    myCartContainerExpanded:{
        // flex:1,
        // alignSelf:'stretch',
        flexDirection: 'column',
        // backgroundColor: 'red',
        zIndex:99,
        position:'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    myCartHeaderSM:{
        flex:0.1, flexDirection:'row', backgroundColor:'white'
    },
    myCartHeaderLG:{
        flex:0.1, flexDirection:'row', backgroundColor:'white'

    },
    myCartHeaderItemsTally:{
        // height: 58,
    },
    myCartBarIcon: {
        height: 58,
    },
    myCartHeaderText:{
        color: '#0D5257',
        fontWeight:'bold', 
        textAlign:'left', 
        marginTop:'auto', 
        marginBottom:'auto', 
        marginLeft:15,
    },
    totalCostContainerSM:{
        flex:0.5,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    totalCostContainerLG:{
        flex:0.2,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    footerContainerSM:{
        flex:0.2, 
        flexDirection:'column',
        backgroundColor: 'white'
        
    },
    footerContainerLG:{
        flex:0.1, 
        flexDirection:'row',
        backgroundColor: 'white'
    },
    payNowBoxSM:{
        flex:0.5, flexDirection:'column',justifyContent:'space-evenly', marginLeft:15, marginRight: 15
    },
    payNowBoxLG:{
        flex:1, 
        flexDirection:'row-reverse', 
        alignSelf:'center'
    },    
    buttonSM: {
        flex:1,
        justifyContent:'space-evenly',
        alignSelf:'stretch',
        // alignItems: 'center',
        backgroundColor: '#DA291C',
        padding: 25,
        borderRadius: 5,
        elevation:2    
    },
    buttonLG: {
        width:350,
        justifyContent:'space-evenly',
        alignSelf:'flex-end',
        // alignItems: 'start',
        backgroundColor: '#DA291C',
        padding: 15,
        borderRadius: 5,
        elevation:5   
    },
    tempBorder:{
        borderWidth: 1,
        borderColor: 'pink',
    },
})

