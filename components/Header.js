import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'
import React from 'react'


const Header = ({steps,setRestart,restart}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>setRestart(!restart)} testID={`restart-btn-to`} >
                <Text style={styles.buttonRestartText}>Restart</Text>
            </TouchableOpacity>

            <View >
                <Text style={styles.stepsText} testID={`steps-text`}>STEPS: <Text style={{color:COLORS.primaryBlue,fontSize:SIZES.h1}} testID={`steps-counter`}>{steps}</Text></Text>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: SIZES.height/10, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: SIZES.padding,
    },
    buttonRestartText:{
        color: COLORS.primaryBlue,
        fontSize: SIZES.h3,
    },
    stepsText:{
        color: COLORS.white,
        fontSize: SIZES.h2,
    }
})