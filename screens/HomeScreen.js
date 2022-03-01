import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const data = [
    { id: 3, value: 1 },
    { id: 5, value: 2},
    { id: 2, value: 3 },
    { id: 4, value: 4 },
    { id: 6, value: 5 },
    { id: 1, value: 6 },
    { id: 7, value: 6 },
    { id: 12, value: 5 },
    { id: 11, value: 4 },
    { id: 8, value: 3 },
    { id: 9, value: 2 },
    { id: 10, value: 1 },

]


const HomeScreen = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.homeReducer.counter)
    const  incrementCounter = () =>{
        dispatch({type:'INCREMENT_COUNTER'})
    }
     
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Header steps={counter}/>
            {console.warn(counter)}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    renderItem={({ item }) => <Card item={item.value} onPress={incrementCounter}/>}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2C3333',
      color:'white',
    },
  });