import React, { useEffect } from 'react'

import '../Styles/Pages/LogInStyles.scss'

import TitleBar from '../Components/Display/TitleBar'
import LogInFields from '../Components/Action/LogInFields'
import BottomBar from '../Components/Display/BottomBar'

import { useSelector, useDispatch } from 'react-redux'

import { reset as resetLogInData } from '../../Background/Redux/Actions/LogIn'

function LogIn(){
    const dispatch = useDispatch()

    const error = useSelector(state => state.login.error)
    const errorPhrase = useSelector(state => state.login.error_phrase)

    useEffect(() => {
        if(error){
            const timeId = setTimeout(() => {
                dispatch(resetLogInData())
            }, 5000)
            return () => {
                clearTimeout(timeId)
            }
        }
    }, [dispatch,error])

    return (
        <>
            <div id='main-page'>
                <div id='header'>
                    <TitleBar />
                </div>
                {error && <div id='alert'>{errorPhrase}</div>}
                <div id='login-page-components'>
                    <LogInFields />
                </div>
                <div id='footer'>
                    <BottomBar />
                </div>
            </div>
        </>
    )
}

export default LogIn