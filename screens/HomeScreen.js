import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, ActivityIndicator, View, Alert } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { pairGenerator } from '../data/pairGenerator';
import { COLORS } from '../constants/theme';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.homeReducer.counter)
    const totalFlipped = useSelector((state) => state.homeReducer.totalFlipped)
    const {row,column} = useSelector((state) => state.homeReducer.orientation)
    const [selected, setSelected] = useState(null)
    const [restart,setRestart]=useState(false)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        //To restart the game
        setLoading(true)
        dispatch({type:'RESET'})
        setData(pairGenerator(row,column)) //this baically take 2 input params based on the visulaization of rows and columns we want the pairs to be displayed. 
        setTimeout(()=>{
            setLoading(false)
        },2000)  // adding the loading screen for 2 seconds deliberately to show the user that the game is loading.
    },[restart])

    useEffect(()=>{
        // This part is to check if the game is over. if over the congratulations alert will be displayed
       if(totalFlipped>0 && totalFlipped === data.length/2){
           Alert.alert("congratulations",`you win the game by ${counter} steps`,[{text:"try another round",onPress:()=>setRestart(!restart)}])
       }
        
    },[totalFlipped]) 

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={{paddingTop: Platform.OS === 'android' ? 25 : 0}}>  
                 <Header steps={counter} restart ={restart} setRestart={setRestart} />
            </View>
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                {loading ? <ActivityIndicator size="large" color={COLORS.primaryBlue} /> :
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={column}
                    renderItem={({ item }) => <Card item={item.value} orientation={{row,column}} selected={selected} setSelected={setSelected} restart={restart}/>}
                />}
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