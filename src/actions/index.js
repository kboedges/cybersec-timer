export const START_TIMER = 'START_TIMER';
export const UPDATE_TIME = 'UPDATE_TIME';
export const STOP_TIMER = 'STOP_TIMER';
export const VALIDATE_PASS = 'VALIDATE_PASS';

export function startTimer({teamName}){
    return {
        type: START_TIMER,
        teamName
    }
}

export function updateTime({timeLeft}){
    return {
        type: UPDATE_TIME,
        timeLeft
    }
}

export function stopTimer({timeLeft}){
    return {
        type: STOP_TIMER,
        timeLeft
    }
}

export function validatePass({passID, passInput}){
    return {
        type: VALIDATE_PASS,
        passID,
        passInput
    }
}