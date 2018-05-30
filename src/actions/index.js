export const START_TIMER = 'START_TIMER';
export const VALIDATE_PASS = 'VALIDATE_PASS';

export const startTimer = (teamName) => ({
        type: START_TIMER,
        teamName
    })

export function validatePass({passID, passInput}){
    return {
        type: VALIDATE_PASS,
        passID,
        passInput
    }
}