export const SIGNIN_ERROR = 'SIGNIN_ERROR'
export const RESET = 'RESET'

export const signInError = data => ({
    type: SIGNIN_ERROR, data
})

export const reset = data => ({
    type: RESET, data
})
