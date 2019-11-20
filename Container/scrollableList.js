import React, { useState, useEffect, useRef, useMemo } from 'react';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Animated,
    Easing,
    Dimentions,
    PanResponder,
  } from 'react-native';

// import { PanResponderActions } from '../Tools/panResponder.js'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';


  const props = {
    itemList: [{}],
    listRef: {},
    scrollOffset: {},
    listHeight: 0,
    visibleItems: [{}],
    children: React.Component,
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const ScrollableList = (props) =>{
    //LOCAL STATE
    const [itemList, setItemList] = useState( props.itemList || [{}])
    // const [scrollPosition, setScrollPosition] = useState()
    // const [scrollSize, setScrollSize] = useState()
    const [scrollOffset, setScrollOffset] = useState(props.scrollOffset)
    useEffect(()=>{
        if(props.scrollOffset !== undefined){
            setScrollOffset(props.scrollOffset)
        }
    },[props.scrollOffset])

    const [scrollBarInitialHeight, setscrollBarInitialHeight] = useState(0)

    const percentageDiff= (initialNum, toCheckNum) => {
        const percentDiff = ((initialNum - toCheckNum)/initialNum * 100)
        return (Math.round(percentDiff))
    }
    
    //ANIMATION STATES FOR SCROLLBAR
    const [fadeValue, setFadeValue] = useState(new Animated.Value(0))
    const [widthValue, setWidthValue] = useState(new Animated.Value(0))
    const [scrollbarPosValue, setscrollbarPosValue] = useState(new Animated.Value(100))
    // const [velocityY] = useState(new Animated.ValueXY())
    // const [panHandlerMoveY, setPanHandlerMoveY] = useState(0)
    // const [scrollbarStartPosition, setScrollbarStartPosition] = useState(0)
    // useEffect(()=>{
    //     console.log(scrollHandlerForStartOfScrollBox(scrollbarStartPosition, panHandlerMoveY))
    //     Animated.timing(velocityY, {
    //         toValue: scrollHandlerForStartOfScrollBox(scrollbarStartPosition, panHandlerMoveY),
    //         duration: 2000,
    //     }).start()
    // },[panHandlerMoveY])
  

    //STATES FOR SCROLL BAR
    const [actioned, setActioned] = useState(false)
    useEffect(()=>{
        // console.log(actioned)
    },[actioned])
    const [lengthOfItems, setLengthOfItems] = useState(props.itemList.length)
    const [scrollbarPercentage, setScrollbarPercentage] = useState(100)
    // const [scrollbarProgressionHeight] = useState(new Animated.View(0))

    useMemo(()=>{
        if(scrollbarPercentage === 100){
            Animated.timing(fadeValue, {
                toValue: 0,
                duration: 2000,
            }).start()
            Animated.timing(widthValue, {
                toValue: 0,
                duration: 1200,
            }).start()
        }
        if(scrollbarPercentage < 100){
            Animated.timing(fadeValue, {
                toValue: 1,
                duration: 1000,
            }).start()
            Animated.timing(widthValue, {
                toValue: 40,
                duration: 1200,
            }).start()
// >>
            Animated.timing(scrollbarPosValue, {
                toValue: scrollBarInitialHeight-scrollbarPercentage,
                duration: 1000,
            }).start()
        }
    },[scrollbarPercentage, scrollBarInitialHeight])


    useEffect(()=>{
        if(props.visibleItems !== undefined){
            if(props.visibleItems.length < lengthOfItems){
                setScrollbarPercentage(100 - percentageDiff(lengthOfItems, props.visibleItems.length))
            }
        }
    },[props.visibleItems])
    
    const find_dimesions = (layout) =>{
        setscrollBarInitialHeight(layout.height)
      }


    //FUNCTIONS
    // const scrollHandlerForStartOfScrollBox = (startPos, velocity) => {
    //     let newValue = startPos + velocity
    //     setScrollbarStartPosition(newValue)
    //     return newValue 
    //}
    const downArrowHandler = () => {
        props.listRef.current.scrollToOffset({animated:true, offset: scrollOffset+100})
    }

    const upArrowHandler = () => {
        props.listRef.current.scrollToOffset({animated:true, offset: scrollOffset-100})
    }
    
    const [flatListTopOffset, setFlatListTopOffset] = useState(0)
    const [point] = useState(new Animated.ValueXY())
    const [position] = useState(new Animated.ValueXY()) 
    const [yPosOfBottomArrow, setPosOfBottomArrow] = useState(0)
    useEffect(()=>{
        
    },[yPosOfBottomArrow])
    // useEffect(()=> {
    //     console.log('offset triggered')
    //     console.log(flatListTopOffset)
    // },[flatListTopOffset])
    //PAN HANDLER
    const PanResponderActions = PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
   
        onPanResponderGrant: (evt, gestureState) => {

          // The gesture has started. Show visual feedback so the user knows
          // what is happening!
          // gestureState.d{x,y} will be set to zero now
        },
        onPanResponderMove: (evt, gestureState) => {
            // console.log(gestureState)
            // setPanHandlerMoveY(parseInt(gestureState.dy))
            // console.log(flatListTopOffset)
            // let actualY = gestureState.moveY - flatListTopOffset
            // console.log(point.getLayout().top)
            Animated.event([{ y: point.y }])({ y: gestureState.moveY })
            props.listRef.current.scrollToOffset({animated:true, offset: gestureState.moveY})
            // position.setValue({ x: gesture.dx, y: gesture.dy });
          // The most recent move distance is gestureState.move{X,Y}
          // The accumulated gesture distance since becoming responder is
          // gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: (evt, gestureState) => false,
        onPanResponderRelease: (evt, gestureState) => {
          // The user has released all touches while this view is the
          // responder. This typically means a gesture has succeeded
        },
        onPanResponderTerminate: (evt, gestureState) => {
          // Another component has become the responder, so this gesture
          // should be cancelled
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
          // Returns whether this component should block native components from becoming the JS
          // responder. Returns true by default. Is currently only supported on android.
          return true;
        },
     })


    const [tempCheck, setTempCheck] = useState(0)

     const scrollHandeler = () => {
        //  console.log('triggered')
         let eventReturnedY = point.getLayout().top
         setTempCheck(eventReturnedY)
         return eventReturnedY
     }



    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#F7F7F7'}}>
            <View style={{flex:1}}>
                {props.children}
            </View>

            {/* SCROLL MANUAL && TOUCH */}
            <Animated.View style={[{width:widthValue,backgroundColor:'#F7F7F7', },{opacity: fadeValue, width: widthValue }]}>
                <View style={styles.scrollContainer}>
                    
                    {/* TOP ARROW */}
                    <TouchableOpacity onPress={upArrowHandler}>
                        <View style={styles.scrollButtonTop}>
                            <FontAwesomeIcon icon={faSortUp} style={{alignSelf:'center', marginTop:13}} color='white' size={20}></FontAwesomeIcon>
                        </View>
                    </TouchableOpacity>

                    {/* SCROLLBAR */}
                    <View onLayout={(event) => { find_dimesions(event.nativeEvent.layout) }} style={{flex:1, borderWidth:1, borderColor:'#0D5257', backgroundColor:'#EBEEEE'}} {...PanResponderActions.panHandlers}>
                    
                    {/* SCROLLPOSITION */}
                    <AnimatedTouchable style={[{top:point.getLayout().top}]} onPressIn={()=>{setActioned(true)}} onPressOut={()=>{setActioned(false)}} onLayout={e => { setFlatListTopOffset(e.nativeEvent.layout.y) }}>
{/* >>>                         */}
                        <Animated.View style={[{height:`100%`, width: 28 ,backgroundColor:'#0D5257', opacity:0.42, borderRadius:12}, {height:scrollbarPosValue}]}></Animated.View>
                    </AnimatedTouchable>

                </View>
                    
                    {/* BOTTOM ARROW */}
                    <TouchableOpacity onPress={downArrowHandler}>
                        <View style={styles.scrollButtonBottom} onLayout={event=>{setPosOfBottomArrow(event.nativeEvent.layout.y)}}>
                            <FontAwesomeIcon icon={faSortDown} style={{alignSelf:'center', marginTop:5}} color='white' size={20}></FontAwesomeIcon>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
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