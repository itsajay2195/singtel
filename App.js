import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import { Provider } from 'react-redux'
import configureStore from './redux/store'


const store =configureStore()

export default function App() {
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
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light"/>
        <Header/>
        <View style={{flex:1,justifyContent:'center',alignItems:'center', overflow: 'hidden'}}>
          <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              renderItem={({ item }) => <Card item={item.value}/>}
          />
        </View>
      
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
    color:'white',
  },
});
