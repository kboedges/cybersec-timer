import { START_TIMER } from '../actions';

const initialTimerStarted = false;

function timerStartedReducer(state = initialTimerStarted, action) {
    switch(action.type) {
        case START_TIMER:
            return true;
        default:
            return state;
    }
}

export default timerStartedReducer