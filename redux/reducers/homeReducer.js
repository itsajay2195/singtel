let initialState = {
    counter:0,
};

let homeReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT_COUNTER':{
            let newState ={...state} 
            newState.counter = state.counter + 1;
            return newState
        }
        case 'RESET':{
            let newState ={...state} 
            newState.counter = 0;
            return newState
        }

        default:
            return state    
    }
}

export default homeReducer

