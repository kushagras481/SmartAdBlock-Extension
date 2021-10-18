import React from 'react'

import '../../Styles/Components/BottomBarStyles.scss'

import {
    toggleColorMode,
    setAuthenticated
} from '../../../Background/Redux/Actions/User'

import { useSelector, useDispatch } from 'react-redux'

import { capitalizeFirstLetter } from '../../../Utilities/StringTools'

import { URL } from '../../../Constants/URLEnums.js'

function BottomBar(props){
    const dispatch = useDispatch()

    const authenticated = useSelector(state => state.user.authenticated)
    const colorMode = useSelector(state => state.user.color_mode)

    let colorModeCap = capitalizeFirstLetter(colorMode)

    const colorModeNormalLogo = chrome.runtime.getURL('assets/images/Normal/'+colorModeCap+'/color-mode-button.png')
    const colorModeHoverLogo = chrome.runtime.getURL('assets/images/Hover/'+colorModeCap+'/color-mode-button.png')

    function toggled(){
        dispatch(toggleColorMode())
    }

    function logout(){
        localStorage.clear()
        localStorage.setItem('color_mode',colorMode)
        dispatch(setAuthenticated(false))
    }

    function learnmore(){
        let url = URL.BASE_URL

        window.open(
            url,
            '_blank'
        )
    }

    return (
        <div id='bottom-bar-section'>
            <div id='learnmore-button-section'>
                <button id='learnmore-button' onClick={learnmore}>Learn More</button>
            </div>
            {authenticated ? <div id='logout-button-section'>
                <button id='logout-button' onClick={logout}>Log out</button>
            </div> : null}
            <div id='color-button-section'>
                <button id='color-button' onClick={toggled}>
                    <img id='color-button-icon' src={colorModeNormalLogo} alt={colorModeNormalLogo} />
                    <img id='color-button-icon' src={colorModeHoverLogo} alt={colorModeHoverLogo} />
                </button>
            </div>
        </div>
    )
}

export default BottomBar