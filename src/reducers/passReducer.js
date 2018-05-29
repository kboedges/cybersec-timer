import { VALIDATE_PASS } from '../actions';

const initialPass = {
    passwordSolutions: ["dog", "cat", "mouse", "bird", "human", "lion"],
    passwordInputs: [
        {
            id: 1,
            disabled: false,
            input: '',
            inputCorrect: false
        },
        {
            id: 2,
            disabled: true,
            input: '',
            inputCorrect: false
        },
        {
            id: 3,
            disabled: true,
            input: '',
            inputCorrect: false
        },
        {
            id: 4,
            disabled: true,
            input: '',
            inputCorrect: false
        },
        {
            id: 5,
            disabled: true,
            input: '',
            inputCorrect: false
        },
        {
            id: 6,
            disabled: true,
            input: '',
            inputCorrect: false
        }  
    ]
}
    

function passReducer(state = initialPass, action) {
    switch (action.type) {
        case VALIDATE_PASS:
          return 
        default:
          return state;
      }
}

export default passReducer