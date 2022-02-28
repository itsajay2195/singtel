import { Animated, FlatList, StyleSheet, Text, TouchableOpacity,View, Button} from 'react-native'
import React, { useRef,useState } from 'react'
import { SIZES, COLORS } from '../constants/theme'



const data = [
    { id: 3, value:1 },
    { id: 5, value: 2},
    { id: 2, value: 3 },
    { id: 4, value: 4 },
    { id: 6, value: 5 },
    { id: 1, value: 6 },
    { id: 7, value: 7 },
    { id: 12, value: 8 },
    { id: 11, value: 9 },
    { id: 8, value: 10 },
    { id: 9, value: 11 },
    { id: 10, value: 12 },

]


const value = SIZES.height - SIZES.height / 10 

const Card = () => {
    const animate =useRef(new Animated.Value(0))
    const [isFlipped,setIsFlipped] = useState(false)
    
    const handleFlip = ()=>{
        Animated.timing(animate.current,{
            duration:1000,
            toValue:isFlipped ? 0 : 180,
            useNativeDriver:true,
        }).start(()=>{
            setIsFlipped(!isFlipped)
        })
        console.log('im clicked')
    }

    const interpolateFront = animate.current.interpolate({
        inputRange:[0,180],
        outputRange:['0deg','180deg']
    });

    const interpolateBack = animate.current.interpolate({
        inputRange:[0,180],
        outputRange:['180deg','360deg']
    });


    return (
            <Animated.FlatList
                // scrollEnabled={true}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <>
                        <Animated.View style={[{transform:[{rotateY:interpolateFront}]},styles.hidden]}>
                            <TouchableOpacity style={styles.item} onPress={()=>handleFlip()}>
                                <Text>?</Text>
                            </TouchableOpacity>
                         </Animated.View>
                        {/* <Animated.View style={[styles.back,styles.hidden,{transform:[{rotateX:interpolateBack}]}]}>
                            <TouchableOpacity style={styles.item} onPress={()=>handleFlip()}>
                                <Text >{item.value}</Text>
                            </TouchableOpacity>
                        </Animated.View> */}
                    </>

                 
                   
                )}
            numColumns={3}
            />

     

          
      

    )
}

export default Card

const styles = StyleSheet.create({
    item: {
        height: (value - (10*20))/4, //columns
        width: (SIZES.width -105)/3, //rows
        backgroundColor: COLORS.primaryBlue,
        borderWidth: 1,
        borderRadius: 10,marginVertical:5,marginHorizontal:5,
        justifyContent: 'center',
        alignItems:'center'
    },
    hidden:{
        // backfaceVisibility:'hidden'
    },
    back:{
        position:'absolute',
        top:0
    }
})