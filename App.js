import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <Header/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Card/>
      </View>
     
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
