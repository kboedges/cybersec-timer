import * as PassAPI from '../utils/PassAPI'

export const START_TIMER = 'START_TIMER';
export const VALIDATE_PASS = 'VALIDATE_PASS';

export const startTimer = (teamName) => ({
        type: START_TIMER,
        teamName
    })

export const validatePass = (passArray, passId, enteredPass) => {
    return {
        type: VALIDATE_PASS,
        passArray,
        passId,
        enteredPass
    }
}

const fetchPasses = (passId, enteredPass) => {
    return dispatch => {
        PassAPI.getPasses()
        .then(json => dispatch(validatePass(json, passId, enteredPass)))
    }
}