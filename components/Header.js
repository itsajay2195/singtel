import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'
import React from 'react'


const Header = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity >
                <Text style={styles.buttonRestartText}>Restart</Text>
            </TouchableOpacity>


            <TouchableOpacity >
                <Text style={styles.stepsText}>STEPS: <Text style={{color:COLORS.primaryBlue}}>0</Text></Text>
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: SIZES.height/10, 
        // backgroundColor: 'red', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: SIZES.padding
    },
    buttonRestartText:{
        color: COLORS.primaryBlue,
        fontSize: SIZES.h2,
    },
    stepsText:{
        color: COLORS.white,
        fontSize: SIZES.h1,
    }
})