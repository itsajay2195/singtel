import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { pairGenerator } from '../data/pairGenerator';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.homeReducer.counter)
    const totalFlipped = useSelector((state) => state.homeReducer.totalFlipped)
    const [selected, setSelected] = useState(null)
    const [restart,setRestart]=useState(false)
    const [data,setData]=useState([])

    useEffect(()=>{
        //To restart the game
        dispatch({type:'RESET'})
        setData(pairGenerator(2,2))
    
    },[restart])

    useEffect(()=>{
        // This part is to check if the game is over. if over the congratulations alert will be displayed
       if(totalFlipped === data.length/totalFlipped){
           Alert.alert("congratulations","you have completed the game",[{text:"try another round",onPress:()=>setRestart(true)}])
       }
        
    },[totalFlipped]) 

    return (
        <SafeAreaView style={styles.container}>
            {console.log('flipped are',totalFlipped)}
            <StatusBar style="light" />
            <Header steps={counter} restart ={restart} setRestart={setRestart} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    renderItem={({ item }) => <Card item={item.value}  selected={selected} setSelected={setSelected} restart={restart}/>}
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