import { STOP_TIMER, UPDATE_TIME } from '../actions';

const initialTimer = {
    timeLeft: {
        total: 5*60*60*1000
    }
}

initialTimer.timeLeft.seconds = Math.floor((initialTimer.timeLeft.total/1000) % 60);
initialTimer.timeLeft.minutes = Math.floor((initialTimer.timeLeft.total/1000/60) % 60);
initialTimer.timeLeft.hours = Math.floor((initialTimer.timeLeft.total/(1000*60*60)) % 24);

function timeReducer(state = initialTimer, action) {
    switch(action.type) {
        case UPDATE_TIME:
            return 
        case STOP_TIMER:
            return
        default:
            return state;
    }
}

export default timeReducer