import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SIZES, COLORS } from '../constants/theme'


const value = SIZES.height - SIZES.height / 10

const Card = ({item,onPress,selected,setSelected,restart}) => {
    const animate = useRef(new Animated.Value(0))
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (num) => {
        onPress();
        if (selected === null){
            rotate();
            setSelected(num)
           
        }else{
            // this piece of code will be excuted when the user is already in search for a match and clicks on another card

            if(selected === num){
                // this piece of code will be excuted when the user clicks on the card with a matching number
                rotate(); // this will rotate the card to 180 degrees
                setSelected(null)// clearing the exising selected card
                return
            }
            else{
                // this piece of code will be excuted when the user clicks on the card with a non-matching number
                rotate(); // this will rotate the card to 180 degrees
                setTimeout(() => {
                Animated.timing(animate.current, {
                    duration: 300,
                    toValue: 360,
                    useNativeDriver: true,
                }).start(()=>setIsFlipped(false)) // this will rotate the card to 360 degrees
            },1000)}
            return
        }
    }

    useEffect(()=>{
       if(isFlipped) {
              rotate();
       } // this is to make sure that all flipped cards are rotated back to 0 degrees when the game is restarted
        
    },[restart])

    const rotate = ()=>{
        console.log('inside rotate')
        Animated.timing(animate.current, {
            duration: 300,
            toValue: isFlipped ? 0 : 180,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(!isFlipped)
        })
    }

    const interpolateFront = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    });

    const interpolateBack = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    });


    return (
        <View>
            <>
                <Animated.View style={[{ transform: [{ rotateY: interpolateFront }] }, styles.hidden]}>
                    <TouchableOpacity style={styles.item} >
                        <Text style={{fontSize:SIZES.h3}}>Front</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.back, styles.hidden, { transform: [{ rotateX: interpolateBack }] }]}>
                    <TouchableOpacity style={[styles.item,{backgroundColor:COLORS.white}]} onPress={() => handleClick(item)}>
                        <Text style={{fontSize:SIZES.h2}} >{item}</Text>
                    </TouchableOpacity>
                </Animated.View>
            </>
        </View>






    )
}

export default Card

const styles = StyleSheet.create({
    item: {
        height: ( ( SIZES.height - SIZES.height / 10)  - (10 * 20)) / 4, //columns
        width: (SIZES.width - 105) / 3, //rows
        backgroundColor:COLORS.primaryBlue,
        borderWidth: 1,
        borderRadius: 10, marginVertical: 5, marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hidden: {
        backfaceVisibility: 'hidden'
    },
    back: {
        position: 'absolute',
        top: 0,
    }
})