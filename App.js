import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import HomeScreen from './screens/HomeScreen';


const store =configureStore()

export default function App() {

  return (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
  );
}


