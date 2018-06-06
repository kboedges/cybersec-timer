import * as PassAPI from '../utils/PassAPI'

export const START_TIMER = 'START_TIMER';
export const VALIDATE_PASS = 'VALIDATE_PASS';
export const PASSES_RECEIVED = 'PASSES_RECEIVED';

export const startTimer = (teamName) => ({
        type: START_TIMER,
        teamName
    })

// Each password will have a 'used' boolean property to say if it has been used already
export const validatePass = (passArray, passId, enteredPass) => {
    return {
        type: VALIDATE_PASS,
        passArray,
        passId,
        enteredPass
    }
}

// Separate fetchPasses and validatePass at some point 
// so that passID and enteredPass aren't needed here
// fetchPasses will grab the stuff from the API

export const fetchPasses = () => {
    return dispatch => {
        PassAPI.getPasses()
        .then(json => dispatch(passesReceived(json.passwords)))
    }
}

export const passesReceived = passwords => ({
    type: PASSES_RECEIVED,
    payload: { passwords }
  });
