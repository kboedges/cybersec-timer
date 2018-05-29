import { START_TIMER } from '../actions';

const initialTimerStarted = {
    timerStarted: false,
    teamName: ''
}

function timerStartedReducer(state = initialTimerStarted, action) {
    switch(action.type) {
        case START_TIMER:
            return Object.assign({}, state, {
                timerStarted: true,
                teamName: action.teamName
              })    
        default:
            return state;
    }
}

export default timerStartedReducer