import React, {useState} from 'react'

import '../../Styles/Components/ToggleButtonStyles.scss'

import { useSelector, useDispatch } from 'react-redux'

import * as ExtensionStatusEnums from '../../../Constants/ExtensionStatusEnums'

import { setExtensionStatus } from '../../../Background/Redux/Actions/User'

function ToggleButton(props){
    const dispatch = useDispatch()
    const defaultClassName = 'toggle-button'
    const extensionStatus = useSelector(state => state.user.extension_status)

    var offClassName
    var onClassName 

    switch(extensionStatus){
        case ExtensionStatusEnums.EXTENSION_STATUS.OFF: {
            offClassName = defaultClassName + ' selected'
            onClassName = defaultClassName
            break
        }
        case ExtensionStatusEnums.EXTENSION_STATUS.ON: {
            onClassName = defaultClassName + ' selected'
            offClassName = defaultClassName
            break
        }
        default:
            break
    }

    function toggleOn(){
        dispatch(setExtensionStatus(ExtensionStatusEnums.EXTENSION_STATUS.ON))
    }

    function toggleOff(){
        dispatch(setExtensionStatus(ExtensionStatusEnums.EXTENSION_STATUS.OFF))
    }
    
    return(
        <div id='extension-toggle-section'>
            <div id='toggle-button-section'>
                <button class={offClassName} onClick={toggleOff}>Off</button>
                <button class={onClassName} onClick={toggleOn}>On</button>
            </div>
        </div>
        
    )
}

export default ToggleButton