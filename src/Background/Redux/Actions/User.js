export const TOGGLE_COLOR_MODE = 'TOGGLE_COLOR_MODE'
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

export const toggleColorMode = data => ({
    type: TOGGLE_COLOR_MODE, data
})

export const setAuthenticated = data => ({
    type: SET_AUTHENTICATED, data
})