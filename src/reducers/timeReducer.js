import { START_TIMER, STOP_TIMER, UPDATE_TIME } from '../actions';

const initialTimer = {
    timerStarted: false,
    timeLeft: {
        total: 5*60*60*1000,
        seconds: Math.floor( (this.total/1000) % 60 ),
        minutes: Math.floor( (this.total/1000/60) % 60 ),
        hours: Math.floor( (this.total/(1000*60*60)) % 24 )
    }
}

function timeReducer(state = initialTimer, action) {
    switch(action.type) {
        case 'START_TIMER':
            return action.timerStarted
        case 'UPDATE_TIME':
            return 
        default:
            return state;
    }
}

export default timeReducer