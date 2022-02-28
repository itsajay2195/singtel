import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../constants/theme'


const data = [
    { id: 3, value: 82 },
    { id: 5, value: 13 },
    { id: 2, value: 94 },
    { id: 4, value: 82 },
    { id: 6, value: 94 },
    { id: 1, value: 13 },
    { id: 7, value: 82 },
    { id: 12, value: 13 },
    { id: 11, value: 94 },
    { id: 7, value: 82 },
    { id: 12, value: 13 },
    { id: 11, value: 94 },

]


const value = SIZES.height - SIZES.height / 10 

const Card = () => {
    return (
            <FlatList
                scrollEnabled={true}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item}>
                        <Text >{value}</Text>
                    </TouchableOpacity>
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
    }
})