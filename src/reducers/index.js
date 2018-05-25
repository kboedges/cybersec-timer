import { combineReducers } from 'redux'
import timeReducer from './timeReducer'
import passReducer from './passReducer'

export default combineReducers({
  timeReducer,
  passReducer
})


/* Examples */
/*
function reducer (state, action) {
    switch (action.type) {
      case 'SUBMIT_USER' :
        return Object.assign({}, state, {
          user: action.user
        })
    }
  }

  function appReducer (state, action) {
    switch (action.type) {
        case 'DELETE_FLAVOR':
            return state.filter(iceCream => 
                iceCream.flavor !== action.flavor
            );
        default:
            return state;
    }
}

function myReducer (state = initialState, action) {
    if ( ) {
      return {
        ...state,
        name: 'Tyler'
      };
    }
  
    return state;
  }
  */