import { SIGNIN_ERROR, RESET } from '../Actions/LogIn'

var init_error = false
var init_error_phrase = ''

const initialState = {
    error: init_error,
    error_phrase: init_error_phrase
}

export default function(state = initialState, action) {
    const {type, data} = action
    switch (type) {
        case SIGNIN_ERROR: {
            return {
                ...state,
                error: true,
                error_phrase: data 
            }
        }
        case RESET: {
            return initialState
        }
        default:
            return state;
    }
}