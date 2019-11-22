import React, { useState, useEffect, useRef, useCallback  } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Animated,
    Dimensions,
    Easing,
    ImageBackgroundComponent,
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

const props = {
    itemList: [{}],
    children: React.Component,
}

export const MyCartV2 = ( props ) => {
    //STATE
    const [itemList, setItemList] = useState(ItemList)
    //status settings
    const [expanded, setExpanded] = useState(false)
    const [expandableContainerWidth] = useState(new Animated.Value(350))
    const [listItemAnimatedWidth, setlistItemAnimatedWidth] = useState(350)
    const [currentWindowDimensions] = useState(Dimensions.get('window'))
    const [itemCount, setItemCount] = useState(0)
    useEffect(()=>{
        if(itemList.length > 0){
            setItemCount(itemList.length)
        }
    },[itemList.length])
    const [totalItemCost, setTotalItemCost] = useState(0.00)
    const [totalCostAnimatedWidth] = useState(new Animated.Value(0))
    const [flexDirection, setFlexDirection] = useState('column')
    const [payNowButtonX] = useState(new Animated.Value(340))
    useEffect(()=>{
           setlistItemAnimatedWidth(currentWindowDimensions.width)
    },[])
    //Arrow animation
    const [downArrowShow, setDownArrowShow] = useState(false)
    const [downArrowHeight] = useState(new Animated.Value(0))
    const [upArrowShow, setUpArrowShow] = useState(false)
    const [downArrowOpacity] = useState(new Animated.Value(0))
    const [upArrowHeight] = useState(new Animated.Value(0))
    const [upArrowOpacity] = useState(new Animated.Value(0))
    const [upArrowSize] = useState(new Animated.Value(1))
    const [downArrowSize] = useState(new Animated.Value(1))
    //FlatList
    const [listRef] = useState(useRef()) 
    const [scrollOffset, setScrollOffset] = useState(props.scrollOffset)
    const [activeItem, setActiveItem] = useState(0)
    const [visibleItems, setVisibleItems] = useState([{}])
    const [columnCount, setColumnCount] = useState(1)
    const [listItemWidth] = useState(new Animated.Value(listItemAnimatedWidth))
    const [listItemHeight] = useState(new Animated.Value(0))
    const [listItemOpacity] = useState(new Animated.Value(1))
    
    

    //ANIMATE EFFECTS
    useEffect(()=>{
        Animated.sequence(
            [
                
                Animated.parallel([

                Animated.timing(expandableContainerWidth, {
                    toValue: expanded? currentWindowDimensions.width : '350',
                    duration: 2500,
                }),
                Animated.timing(totalCostAnimatedWidth, {
                    toValue: expanded? '200' : '345',
                    duration: 2500,
                }),
            ]),
        ]
        ).start(() => {
            Animated.parallel([
                Animated.timing(listItemHeight, {
                toValue: 75,
                duration: 2000,
                // easing: Easing.bounce,
            }),
            Animated.timing(listItemOpacity, {
                toValue: 1,
                duration: 1500,
                // easing: Easing.bounce,
            })
            ])
            .start()

            if(expanded === true){
                setDownArrowShow(false)
                setUpArrowShow(false)
            }
            if(expanded === false){
                setDownArrowShow(true)
                setUpArrowShow(true)
            }
            
        })   
        
        
        expanded === true ? setColumnCount(2) : setColumnCount(1)
    },[expanded])

    useEffect(()=>{
        
        Animated.sequence([
            Animated.parallel([
                Animated.timing(downArrowHeight, {
                toValue: downArrowShow? 25 : 0,
                duration: 1000,
                easing: Easing.bounce,
                }),
                Animated.timing(downArrowOpacity, {
                    toValue: downArrowShow? 1 : 0,
                    duration: 2500,
                }),
            ]),
            Animated.timing(downArrowSize, {
                toValue: 1.5,
                duration: 1000,
            }),
            Animated.timing(downArrowSize, {
                toValue: 1,
                duration: 1000,
            }),
        ]).start()
    },[downArrowShow])

    useEffect(()=>{
        Animated.sequence([
            Animated.parallel([
                Animated.timing(upArrowHeight, {
                toValue: upArrowShow? 25 : 0,
                duration: 1000,
                easing: Easing.bounce,
                }),
                Animated.timing(upArrowOpacity, {
                    toValue: upArrowShow? 1 : 0,
                    duration: 2500,
                }),
            ]),
            Animated.timing(upArrowSize, {
                toValue: 1.5,
                duration: 1000,
            }),
            Animated.timing(upArrowSize, {
                toValue: 1,
                duration: 1000,
            }),
        ]).start()
    },[upArrowShow])

    useEffect(()=>{
        Animated.timing(listItemWidth, {
            toValue: listItemAnimatedWidth,
            duration: 1000,
        }).start()
    },[listItemAnimatedWidth])
 
    const downArrowHandler = () => {
        listRef.current.scrollToOffset({animated:true, offset: scrollOffset + 100})
    }

    const upArrowHandler = () => {
        listRef.current.scrollToOffset({animated:true, offset: scrollOffset - 100})
    }

    const HandleTileClick = (index) => {
        setActiveItem(index)
        listRef.current.scrollToIndex({animated:true, index:index, offset:0})

    }

    const bottomOfListHandler = ({distanceFromEnd}) => {
        console.log(distanceFromEnd)
    }

    const onViewableItemsChanged = useRef(({viewableItems, changed}) => {
        if(viewableItems.length > 0){
            const firstVisibleItemIndex = viewableItems[0].index
            const lastVisibleItemIndex = viewableItems[viewableItems.length-1].index
            const totalItemLength = itemList.length

            if(lastVisibleItemIndex === totalItemLength -1 ){
                setUpArrowShow(true)
                setDownArrowShow(false)
            }
            if(firstVisibleItemIndex === 0){
                setUpArrowShow(false)
                setDownArrowShow(true)
            }
            
            if(firstVisibleItemIndex !== 0 && lastVisibleItemIndex !== totalItemLength -1 ){
                setUpArrowShow(true)
                setDownArrowShow(true)
            }
        }
    })

    const viewabilityConfig = useRef({viewAreaCoveragePercentThreshold: 50}) 

    const expandClickHandler = () => {
        
        
        
        setExpanded(!expanded)
    }


    return(
        <Animated.View style={[styles.myCartExpandableContainer, styles.tempBorder, {width: expandableContainerWidth}]}>
            {/* HEADER */}
            <TouchableOpacity 
                // onPress={expandClickHandler} 
                onPressIn={() => {
                    Animated.parallel([
                        Animated.timing(listItemHeight,{
                        toValue: 0,
                        duration: 2000,
                        }),
                        Animated.timing(listItemOpacity,{
                            toValue: 0,
                            duration: 2000,
                        })
                    ])
                    .start( setExpanded(!expanded))
                }}
            >
                <Animated.View style={[styles.myCartHeader]}>
                    <FontAwesomeIcon icon={faShoppingCart} size={30} color='#DA291C'></FontAwesomeIcon>
                    <Text style={[styles.myCartHeaderText]}>My Cart: {itemCount} {itemCount === 1? 'item' : 'items'}</Text>
                    <View style={[styles.myCartExpandButton]}>
                        <FontAwesomeIcon icon={faBars} size={30}></FontAwesomeIcon>
                    </View>
                </Animated.View>
            </TouchableOpacity>

            {/* BODY */}
            <View style={{flex:1}}>
                {/* UPPER BUTTON */}
                <TouchableOpacity onPress={downArrowHandler}>
                    <Animated.View style={[{backgroundColor:'lightgray', alignItems:'center', justifyContent:'center',  height:downArrowHeight, opacity:downArrowOpacity}]}>
                        
                        <Animated.View style={{transform: [{scale: downArrowSize}]}}>
                            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                        </Animated.View>    
                    
                    </Animated.View>
                </TouchableOpacity>

                <View style={[styles.myCartBodyContainer, {backgroundColor:'#F7F7F7'}]} onLayout={event => setlistItemAnimatedWidth(event.nativeEvent.layout.width)}>
                    {/* BODY START */}
                    <View style={{flex:1}}>
                        <FlatList
                            key={columnCount}
                            data={itemList}
                            onViewableItemsChanged={ onViewableItemsChanged.current }
                            viewabilityConfig={viewabilityConfig.current}
                            renderItem={(item, index)=>
                                <Animated.View style={expanded? {width: currentWindowDimensions.width/2} : {width : listItemWidth, height: listItemHeight, opacity: listItemOpacity}}>
                                    <ListItem
                                    key={index}
                                    leftAvatar={{ source: { uri: Image } }}
                                    title={`title - ${item.id}`}
                                    subtitle={item.price}
                                    rightIcon={<FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>}
                                    // ref={listItemRef}
                                    bottomDivider
                                    />
                                </Animated.View>
                            
                            }
                            // onViewableItemsChanged={event => onViewableItemsChanged(event)}
                            numColumns={columnCount} 
                            contentContainerStyle={expanded? {} : {}}
                            keyExtractor={(item, index) => item.description + index.toString()}
                            ref = {listRef}
                            onScroll={(e)=> {setScrollOffset(e.nativeEvent.contentOffset.y)}}
                            // onEndReached={bottomOfListHandler}
                        ></FlatList>

                    </View>
                    {/* BODY END */}
                </View>

                {/* LOWER BUTTON */}
                <TouchableOpacity onPress={upArrowHandler}>
                    <Animated.View style={{backgroundColor:'lightgray', alignItems:'center', justifyContent:'center', height:upArrowHeight, opacity:upArrowOpacity}}>
                    <Animated.View style={{transform: [{scale: upArrowSize}]}}>
                            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        </Animated.View>
                    </Animated.View>
                </TouchableOpacity>
            </View>

            {/* FOOTER */}
            <View style={[styles.myCartFooter, {flexDirection:flexDirection}]}>
                <Animated.View style={[styles.myCartTotalContainer, {width:totalCostAnimatedWidth}]}>
                    <Text style={[styles.myCartTotalText]}>Total</Text>
                    <Text style={[styles.myCartTotalText]}>$ {totalItemCost.toFixed(2)}</Text>
                </Animated.View>

                {/* WRAPPER AROUND BUTTON TO EXTRACT */}
                <Animated.View style={[{flex:1, paddingLeft:10, paddingRight:10, paddingBottom:20, width:345},{width:payNowButtonX}]}>
                    
                    <View style={{justifyContent:'center', height:'100%', backgroundColor:'#DA291C', borderRadius:5 , elevation:4}}>
                    <TouchableOpacity style={[{flexDirection:'row', justifyContent:'space-between', paddingLeft:10, paddingRight:10}]}>
                        <Text style={{fontWeight:'bold', fontSize:20, color: 'white'}}>Pay Now</Text>
                        <FontAwesomeIcon icon={faArrowRight} size={20} color='white'></FontAwesomeIcon>
                    </TouchableOpacity>
                    </View>
                    
                </Animated.View>
                {/* WRAPPER AROUND BUTTON TO EXTRACT END */}
            </View>
        </Animated.View>
        )
};




const styles = StyleSheet.create({
    myCartExpandableContainer: {
        flexDirection:'column',
        backgroundColor: 'white',
        elevation: 10,
        
    },
    myCartHeader:{
        height:56,
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#00000052',
    },
    myCartHeaderText:{
        color: '#0D5257',
        fontWeight:'bold',
        fontSize:20,
        paddingLeft:5,
        fontFamily: 'Futura',
    },
    myCartExpandButton: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    myCartBodyContainer: {
        flexGrow:1,
    },
    myCartFooter:{
        // flex: 0.3,
        width: '100%',
        height: 150,  
        backgroundColor:'white',
        borderTopWidth:2,
        borderTopColor:'#00000029',
        // flexDirection:'column',
    },
    myCartTotalText:{
        fontSize:30,
        fontWeight:'bold',
    },
    myCartTotalContainer: {
        flex:0.8, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        // backgroundColor:'lightgray', 
        paddingLeft:10, 
        paddingRight:10
    },
    tempBorder:{
        borderWidth: 1,
        borderColor: 'red',
    },
})

