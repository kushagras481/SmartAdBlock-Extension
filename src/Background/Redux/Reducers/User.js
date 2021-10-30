import { SET_AUTHENTICATED, TOGGLE_COLOR_MODE, SET_EXTENSION_STATUS } from '../Actions/User'

import * as ExtensionStatusEnums from '../../../Constants/ExtensionStatusEnums'

var init_auth = true
var init_color_mode = null
var init_extension_status = ExtensionStatusEnums.EXTENSION_STATUS.ON

if(localStorage.getItem('color_mode') == null){
    localStorage.setItem('color_mode', 'dark')
}

if(localStorage.getItem('extension_status') == null){
    localStorage.setItem('extension_status', ExtensionStatusEnums.EXTENSION_STATUS.ON)
}

init_color_mode = localStorage.getItem('color_mode')
init_extension_status = localStorage.getItem('extension_status')

const initialState = {
    authenticated: init_auth,
    color_mode: init_color_mode,
    extension_status: init_extension_status
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
        case SET_EXTENSION_STATUS: {
            localStorage.setItem('extension_status', data)
            return {
                ...state,
                extension_status: data
            }
        }
        default:
            return state;
    }
}