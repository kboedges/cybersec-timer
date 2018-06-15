import { VALIDATE_PASS } from '../actions';

const initialPass = {
    passwordSolutions: [
        "password1",
        "password2",
        "password3",
        "password4",
        "password5",
        "password6"
    ],
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
            return {
                passwordSolutions: [...state.passwordSolutions, action.passArray],
                passwordInputs: [
                    ...state.passwordInputs, 
                    [action.passId-1].inputCorrect: (
                        passwordSolutions.includes(action.enteredPass) ? true : false
                    )
                ]
            }
        default:
          return state;
      }
}

export default passReducer