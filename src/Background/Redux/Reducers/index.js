import { combineReducers } from 'redux'

import user from './User'
import login from './LogIn'
import extensiondata from './ExtensionData'

export default combineReducers({ 
    user, 
    login,
    extensiondata,
})