import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import { SIZES, COLORS } from '../constants/theme'


const value = SIZES.height - SIZES.height / 10

const Card = ({item}) => {
    const animate = useRef(new Animated.Value(0))
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        Animated.timing(animate.current, {
            duration: 300,
            toValue: isFlipped ? 0 : 180,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(!isFlipped)
        })
        console.log('im clicked')
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
                    <TouchableOpacity style={styles.item} onPress={() => handleFlip()}>
                        <Text style={{fontSize:SIZES.h3}}>Front</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.back, styles.hidden, { transform: [{ rotateX: interpolateBack }] }]}>
                    <TouchableOpacity style={[styles.item,{backgroundColor:COLORS.white}]} onPress={() => handleFlip()}>
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
        height: (value - (10 * 20)) / 4, //columns
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