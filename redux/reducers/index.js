import {combineReducers} from 'redux'
import homeReducer from './homeReducer'

let reducers = combineReducers({
    homeReducer:homeReducer
})

const rootReducer =(state,action)=>{
    return reducers(state,action)
}

export default rootReducer;