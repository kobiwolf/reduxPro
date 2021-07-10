import {combineReducers} from 'redux'

const namesReducer=(state=[],action)=>{
    if(!action)return state
      switch (action.type){
        case 'ADD_NAME':
            return [...state,action.payload]
        default:
          return state
      }
}

export default combineReducers({namesReducer})