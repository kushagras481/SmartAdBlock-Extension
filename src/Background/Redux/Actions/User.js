export const TOGGLE_COLOR_MODE = 'TOGGLE_COLOR_MODE'
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const SET_EXTENSION_STATUS = 'SET_EXTENSION_STATUS'

export const toggleColorMode = data => ({
    type: TOGGLE_COLOR_MODE, data
})

export const setAuthenticated = data => ({
    type: SET_AUTHENTICATED, data
})

export const setExtensionStatus = data => ({
    type: SET_EXTENSION_STATUS, data
})