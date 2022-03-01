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


