import { combineReducers } from 'redux'

import user from './User'
import login from './LogIn'
import data from './Data'

export default combineReducers({ 
    user, 
    login,
    data,
})