import { SELECT_SITE } from '../Actions/LogIn'

var init_site_selected = { value: 'youtube', label: 'YouTube' }

const initialState = {
    site_selected: init_site_selected
}

export default function(state = initialState, action) {
    const {type, data} = action
    switch (type) {
        case SELECT_SITE: {
            return {
                ...state,
                site_selected: data 
            }
        }
        default:
            return state;
    }
}