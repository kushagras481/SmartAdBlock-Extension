import { SELECT_SITE, SET_WHITELIST_MODE, SET_LINKED_ADBLOCKERS_MODE, SET_LINKED_AD_BLOCKERS_DATA } from '../Actions/ExtensionData'

import * as ModeEnums from '../../../Constants/ModeEnums'

var init_site_selected = null
var init_whitelist_mode = ModeEnums.MODES.VIEWING
var init_linked_adblockers_mode = ModeEnums.MODES.VIEWING
var init_linked_ad_blockers_data = null

if(localStorage.getItem('site_selected') == null){
    localStorage.setItem('site_selected', JSON.stringify({ value: 'youtube', label: 'YouTube' }))
}

if(localStorage.getItem('whitelist_mode') == null){
    localStorage.setItem('whitelist_mode', ModeEnums.MODES.VIEWING)
}

if(localStorage.getItem('linked_adblockers_mode') == null){
    localStorage.setItem('linked_adblockers_mode', ModeEnums.MODES.VIEWING)
}

if(localStorage.getItem('linked_ad_blockers_data') == null){
    localStorage.setItem('linked_ad_blockers_data', JSON.stringify([]))
}

init_site_selected = JSON.parse(localStorage.getItem('site_selected'))
init_whitelist_mode = localStorage.getItem('whitelist_mode')
init_linked_adblockers_mode = localStorage.getItem('linked_adblockers_mode')
init_linked_ad_blockers_data = JSON.parse(localStorage.getItem('linked_ad_blockers_data'))

const initialState = {
    site_selected: init_site_selected,
    whitelist_mode: init_whitelist_mode,
    linked_adblockers_mode: init_linked_adblockers_mode,
    linked_ad_blockers_data: init_linked_ad_blockers_data
}

export default function(state = initialState, action) {
    const {type, data} = action
    switch (type) {
        case SELECT_SITE: {
            localStorage.setItem('site_selected',JSON.stringify(data))
            return {
                ...state,
                site_selected: data 
            }
        }
        case SET_WHITELIST_MODE: {
            localStorage.setItem('whitelist_mode', data)
            return {
                ...state,
                whitelist_mode: data 
            }
        }
        case SET_LINKED_ADBLOCKERS_MODE: {
            localStorage.setItem('linked_adblockers_mode', data)
            return {
                ...state,
                linked_adblockers_mode: data 
            }
        }
        case SET_LINKED_AD_BLOCKERS_DATA: {
            localStorage.setItem('linked_ad_blockers_data',JSON.stringify(data))
            return {
                ...state,
                linked_ad_blockers_data: data 
            }
        }
        default:
            return state;
    }
}