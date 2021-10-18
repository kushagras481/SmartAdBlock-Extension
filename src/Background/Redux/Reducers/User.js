import { SET_AUTHENTICATED, TOGGLE_COLOR_MODE } from '../Actions/User'

var init_auth = true
var init_color_mode = null

if(localStorage.getItem('color_mode') == null){
    localStorage.setItem('color_mode', 'dark')
    init_color_mode = 'dark'
}

init_color_mode = (localStorage.getItem('color_mode'))

const initialState = {
    authenticated: init_auth,
    color_mode: init_color_mode
}

export default function(state = initialState, action) {
    const {type, data} = action
    switch (type) {
        case TOGGLE_COLOR_MODE: {
            var mode = ''
            if(state.color_mode == 'dark'){
                mode = 'light'
                localStorage.setItem('color_mode',mode)
            }
            else if(state.color_mode == 'light'){
                mode = 'dark'
                localStorage.setItem('color_mode',mode)
            }
            return {
                ...state,
                color_mode: mode 
            }
        }
        case SET_AUTHENTICATED: {
            return {
                ...state,
                authenticated: data
            } 
        }
        default:
            return state;
    }
}