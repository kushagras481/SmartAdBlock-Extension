import React, { useState, useEffect } from 'react'

import '../../Styles/Components/ContentsContainerStyles.scss'
import StatusContainer from '../Containers/StatusContainer'
import WhitelistContainer from '../Containers/WhitelistContainer'
import LinkedAdBlockersContainer from  '../Containers/LinkedAdBlockersContainer'

//import nested components here

function ContentsContainer(props){
    return (
        <div id='container-section'>
            <StatusContainer />
            <WhitelistContainer />
            <LinkedAdBlockersContainer />
        </div>
    )
}

export default ContentsContainer