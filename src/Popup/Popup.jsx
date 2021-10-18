import React, { useEffect } from 'react'

import LogIn from './Pages/LogIn'
import MainContents from './Pages/MainContents'

import { useSelector, useDispatch } from 'react-redux'

import {
    setAuthenticated,
} from '../Background/Redux/Actions/User.js'

function Popup(props){
    const dispatch = useDispatch()

    const authenticated = useSelector(state => state.user.authenticated)
    const colorMode = useSelector(state => state.user.color_mode)

    function logout(){
        localStorage.clear()
        localStorage.setItem('color_mode',colorMode)
        localStorage.setItem('fill_mode',fillMode)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', colorMode);
    }, [colorMode])

    var viewer = (
        <>
        </>
    )

    if(authenticated){
        viewer = <MainContents />
    }
    else{
        viewer = <LogIn />
    }

    return (
        <div id='page-content'>
            {viewer}
        </div>
    )
}

export default Popup