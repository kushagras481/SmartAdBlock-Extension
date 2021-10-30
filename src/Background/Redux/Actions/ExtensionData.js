export const SELECT_SITE = 'SELECT_SITE'
export const SET_WHITELIST_MODE = 'SET_WHITELIST_MODE'
export const SET_LINKED_ADBLOCKERS_MODE = 'SET_LINKED_ADBLOCKERS_MODE'
export const SET_LINKED_AD_BLOCKERS_DATA = 'SET_LINKED_AD_BLOCKERS_DATA'

export const selectSite = data => ({
    type: SELECT_SITE, data
})

export const setWhitelistMode = data => ({
    type: SET_WHITELIST_MODE, data
})

export const setLinkedAdBlockersMode = data => ({
    type: SET_LINKED_ADBLOCKERS_MODE, data
})

export const setLinkedAdBlockersData = data => ({
    type: SET_LINKED_AD_BLOCKERS_DATA, data
}) 