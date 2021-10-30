import React, {useState, useEffect} from 'react'

import '../../Styles/Components/StatusContainerStyles.scss'
import ToggleButton from '../Action/ToggleButton'
import '../../Styles/Components/AdBlockStatusStyles.scss'

function StatusContainer(props){
    return(
        <div id="status-section">
            <ToggleButton/>
            <div id="extension-adblock-status-section">
                
            </div>
        </div>
    )
}

export default StatusContainer