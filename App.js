import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <Header/>
      <Text style={{color:'white'}}>Open up App.js to start working on your app!</Text>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
    color:'white',
  },
});
